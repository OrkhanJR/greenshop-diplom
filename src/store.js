import { configureStore } from "@reduxjs/toolkit";
import categoriesSliceReducer from "./redux/slices/slice";
import cartSliceReducer from "./redux/slices/cartSlice";
import formSlice from "./redux/slices/formSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    cart: cartSliceReducer,
    form: formSlice,
  },
});

export default store;
