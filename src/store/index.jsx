import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice"; // Import the default exported reducer

const store = configureStore({
  reducer: {
    users: userSlice, // Use the correct reducer name
  },
});

export default store;
