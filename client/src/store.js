import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questions/questionSlice";
import layoutsReducer from "./features/layouts/layoutSlice";

export default configureStore({
  reducer: {
    questions: questionsReducer,
    layouts: layoutsReducer,
  },
});
