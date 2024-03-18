import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/Pages/MainPage/MainPageComponents/ProductsPart/ProductsData";

const initialState = {
  selectedCategory: null,
  selectedFilter: "all",
  selectedSortingOption: "Default",
  products: products,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    setSelectedSortingOption: (state, action) => {
      state.selectedSortingOption = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedFilter,
  setSelectedSortingOption,
  setPriceRange,
  setProducts,
} = categoriesSlice.actions;

export const selectSelectedCategory = (state) =>
  state.categories.selectedCategory;
export const selectProducts = (state) => state.categories.products;
export const selectSelectedFilter = (state) => state.categories.selectedFilter;
export const selectSelectedSortingOption = (state) =>
  state.categories.selectedSortingOption;
export const selectPriceRange = (state) => state.categories.priceRange;

export default categoriesSlice.reducer;
