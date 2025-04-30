import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {openai, openAiStream} from "../utilities/axios.js";

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
    builder.addCase(fetchAiResponse.fulfilled, (state) => {
      state.loading = false
    })
    builder.addCase(fetchAiResponse.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchAiResponse.pending, (state) => {
      state.loading = true
    })
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

export const fetchResponse = createAsyncThunk('assistant/fetchResponse', async (query) => {
  try {
    const response = await openai.post("/responses", {
      model: "gpt-4o-mini",
      tools: [{
        type: "file_search",
        vector_store_ids: [import.meta.env.VITE_VECTOR_STORE_ID],
        max_num_results: 20
      }],
      input: query,
    })
    return response?.data.output[1].content[0].text
  } catch (error) {
    throw new Error(error)
  }
})

export const fetchAiResponse = createAsyncThunk('assistant/fetchResponse', async (query) => {
  try {
    let run = await openai.post('/threads/runs', {
      assistant_id: import.meta.env.VITE_ASSISTANT_ID,
      thread: {
        messages: [{ role: "user", content: query }]
      }
    });
    const threadId = run.data.thread_id
    const runId = run.data.id
    while (run.data.status !== "completed") {
      run = await openai.get(`/threads/${threadId}/runs/${runId}`)
    }
    if (run.data.status === 'completed') {
      const messages = await openai.get(`/threads/${threadId}/messages`)
      openai.delete(`https://api.openai.com/v1/threads/${threadId}`)
      return messages.data.data[0].content[0].text.value.replace(/\【.*?】/g, '')
      //return message[message.length - 2] === "】" ? message.substring(0, message.length - 13).concat(".") : message
    } else {
      console.log(run.status);
    }
  } catch (error) {
    throw new Error(error)
  }
})

export default assistantSlice.reducer
export const { addMessageToChat, addAiStream} = assistantSlice.actions