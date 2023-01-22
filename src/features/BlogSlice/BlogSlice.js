import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

export const BlogSlice = createSlice({
  name: "blogs",
  initialState: initialValue,
  reducers: {
    addBlog: (state, action) => {
      const { author, title, body } = action.payload;
      if (author && title && body) {
        return [...state, action.payload];
      }
    },
    handleIncrease: (state, action) => {
      //   state.thumpsUp += 1;
      const blogIndex = state.findIndex((blog) => blog.id === action.payload);
      if (blogIndex !== -1) {
        state[blogIndex].thumpsUp += 1;
      }
    },
    handleDecrease: (state, action) => {
      const blogIndex = state.findIndex((blog) => blog.id === action.payload);
      if (blogIndex !== -1) {
        state[blogIndex].thumpsDown += 1;
      }
    },
  },
});

export const { addBlog, handleIncrease, handleDecrease } = BlogSlice.actions;

export default BlogSlice.reducer;
