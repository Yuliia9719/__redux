import { configureStore } from "@reduxjs/toolkit";
import counterReductor from "./counterSlice.ts";

const store = configureStore({
  reducer: counterReductor
});

export default store