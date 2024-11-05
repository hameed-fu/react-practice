import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cart: 0,

};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    user: (state) => {
      localStorage.getItem('uermail')
    },
  },
});

export const { increment, decrement, addTocard } = counterSlice.actions;
export default counterSlice.reducer;
