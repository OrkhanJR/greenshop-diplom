import { configureStore } from "@reduxjs/toolkit";
import categoriesSliceReducer from "./redux/slices/slice";

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
  },
});

export default store;
