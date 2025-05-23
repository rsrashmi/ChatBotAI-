import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  messages: [],
  isProcessing: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        id: uuidv4(),
        timestamp: new Date().toISOString(),
        ...action.payload,
      });
    },
    setProcessing: (state, action) => {
      state.isProcessing = action.payload;
    },
    loadMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { addMessage, setProcessing, loadMessages } = chatSlice.actions;
export default chatSlice.reducer;
