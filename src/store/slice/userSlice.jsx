import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});

console.log("hiii");

console.log(userSlice.actions);

export const { increment, decrement } = userSlice.actions; // Exporting actions
export default userSlice.reducer; // Exporting the reducer
