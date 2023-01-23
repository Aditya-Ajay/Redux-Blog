import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

export const BlogSlice = createSlice({
  name: "blogs",
  initialState: initialValue,
  reducers: {
    addBlog: {
      reducer: (state, action) => {
        state.push(action.payload); // immer js comes handy here as we don't have to prepare a new state for modifying the state ,
        // instead immmer js automatically create a copy this only happens inside createSlice
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            id: new Date().getTime(),
            thumpsUp: 0,
            thumpsDown: 0,
          },
        };
      },
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

export const selectedBlogs = (state) => state.blog;

export const { addBlog, handleIncrease, handleDecrease } = BlogSlice.actions;

export default BlogSlice.reducer;
