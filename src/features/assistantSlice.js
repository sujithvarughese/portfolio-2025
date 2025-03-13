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
      state.chat.push({ sender: "user", message: action.payload })
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAiResponse.fulfilled, (state, action) => {
      state.chat.push({ sender: "assistant", message: action.payload})
      state.loading = false
    })
    builder.addCase(fetchAiResponse.rejected, (state) => {
      state.loading = false
      console.log("Failed to fetch response")
    })
    builder.addCase(fetchAiResponse.pending, (state) => {
      state.loading = true
    })
  }
})
const ASSISTANT_KEY = import.meta.env.VITE_ASSISTANT_ID;

export const fetchAiResponse = createAsyncThunk('assistant/fetchResponse', async (query) => {
  try {
    let run = await openai.post('/threads/runs', {
      assistant_id: ASSISTANT_KEY,
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
export const { addMessageToChat} = assistantSlice.actions