import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    addQuestions: (state, action) => {
      console.log(action);
      state.questions = [...state.questions, action.payload];
    },
  },
});

export const { addQuestions } = questionSlice.actions;

export default questionSlice.reducer;
