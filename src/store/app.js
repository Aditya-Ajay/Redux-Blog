import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "../features/BlogSlice/BlogSlice";
export const store = configureStore({
  reducer: {
    blog: BlogReducer,
  },
});
