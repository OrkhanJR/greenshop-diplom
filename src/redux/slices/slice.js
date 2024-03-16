import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/Pages/MainPage/MainPageComponents/ProductsPart/ProductsData";

const initialState = {
  selectedCategory: null,
  products: products,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;

export const selectSelectedCategory = (state) =>
  state.categories.selectedCategory;
export const selectProducts = (state) => state.categories.products;

export default categoriesSlice.reducer;
