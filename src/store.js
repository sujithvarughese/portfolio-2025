import {configureStore} from "@reduxjs/toolkit";
import assistantReducer from "./features/assistantSlice";

export const store = configureStore({
  reducer: {
    assistant: assistantReducer
  }
})