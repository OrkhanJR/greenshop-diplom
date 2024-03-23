import { configureStore } from "@reduxjs/toolkit";
import categoriesSliceReducer from "./redux/slices/slice";
import cartSliceReducer from "./redux/slices/cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    cart: cartSliceReducer,
  },
});

export default store;
