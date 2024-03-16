import { configureStore } from "@reduxjs/toolkit";
import slice from "./redux/slices/slice";

export const store = configureStore({
  reducer: {
    slice,
  },
});

export default store;
