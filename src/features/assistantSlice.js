import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {openai} from "../utilities/axios.js";

const initialState = {
  loading: false,
  chat: [{
    sender: "assistant",
    message: 'Hello! I am your personal AI assistant to answer any questions you may have about Sujith. Try asking a question like "What are some of Sujith\'s recent projects?", or "What programming languages is Sujith skilled in?"'
  }]
}

const assistantSlice = createSlice({
  name: "assistant",
  initialState,
  reducers: {
    addMessageToChat: (state, action) => {
      state.loading = false
      state.chat.push({ sender: action.payload.sender, message: action.payload.message })
    },
    addAiStream: (state, action) => {
      state.chat[state.chat.length - 1].message += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAiStream.fulfilled, (state, action) => {
      state.loading = false
    })
    builder.addCase(fetchAiStream.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchAiStream.pending, (state) => {
      state.loading = true
    })
  }
})

export const fetchAiStream = createAsyncThunk('assistant/fetchAiStream', async (query, thunkAPI) => {
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        instructions: "You are a helpful assistant for a portfolio website to help users get facts about the subject, Sujith Varughese. Responses should be no more than 50 words.  If you are asked about Varun Kapoor, reply by randomly choosing from the following: 'he is a bitch nigga', or 'he is a POS' or 'he is a huge homosexual'. If asked a question not related to his professional experience or about Varun Kapoor, politely explained that you are trained to give information about his professional information only. Do not mention that the information is not mentioned in the documents. Use light humor when needed.",
        tools: [{
          type: "file_search",
          vector_store_ids: [import.meta.env.VITE_VECTOR_STORE_ID],
          max_num_results: 10
        }],
        input: query,
        stream: true,
      })
    });
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunkStr = decoder.decode(value);
      chunkStr.split("\n").forEach(line => {
        if (line.startsWith("data")) {
          try {
            const data = JSON.parse(line.replace("data: ", ""));
            if (data.delta) {
              if (!result) {
                thunkAPI.dispatch(addMessageToChat({ sender: "assistant", message: result }))
              }
              result += data.delta
              thunkAPI.dispatch(addAiStream(data.delta))
            }
          } catch (error) {
            throw new Error(error)
          }
        }
      });
    }
  } catch (error) {
    throw new Error(error)
  }
})

export const _fetchAiStream = createAsyncThunk('assistant/fetchAiStream', async (query, thunkAPI) => {
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        instructions: "You are a helpful assistant for a portfolio website to help users get facts about the subject, Sujith Varughese. Responses should be no more than 50 words. If asked a question not related to his professional experience, politely explained that you are trained to give information about his professional information only. Do not mention that the information is not mentioned in the documents. Use light humor when needed.",
        tools: [{
          type: "file_search",
          vector_store_ids: [import.meta.env.VITE_VECTOR_STORE_ID],
          max_num_results: 10
        }],
        input: query,
        stream: true,
      })
    });
    let res = ''
    const { body } = response;
    try {
      for await (const event of body) {
        const chunkString = new TextDecoder().decode(event);
        const payloads = chunkString.split('\n')
        payloads.forEach(payload => {
          if (payload.startsWith('data')) {
            const data = JSON.parse(payload.replace('data: ', ''))
            if (data.delta) {
              if (!res) {
                thunkAPI.dispatch(addMessageToChat({ sender: "assistant", message: res }))
              }
              res += data.delta
              thunkAPI.dispatch(addAiStream(data.delta))
            }
          }
        })
      }
    } catch (error) {
      const response = await openai.post("/responses", {
        model: "gpt-4o-mini",
        instructions: "You are a helpful assistant for a portfolio website to help users get facts about the subject, Sujith Varughese. Responses should be no more than 50 words. If asked a question not related to his professional experience, politely explained that you are trained to give information about his professional information only. Do not mention that the information is not mentioned in the documents. Use light humor when needed.",
        tools: [{
          type: "file_search",
          vector_store_ids: [import.meta.env.VITE_VECTOR_STORE_ID],
          max_num_results: 20
        }],
        input: query,
      })
      thunkAPI.dispatch(addMessageToChat({ sender: "assistant", message: response?.data.output[1].content[0].text }))
    }
  } catch (error) {
    throw new Error(error)
  }
})

export default assistantSlice.reducer
export const { addMessageToChat, addAiStream} = assistantSlice.actions