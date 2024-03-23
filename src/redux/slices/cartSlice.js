import { createSlice } from "@reduxjs/toolkit";
// import { products } from "../../components/Pages/MainPage/MainPageComponents/ProductsPart/ProductsData";

const getSavedCartItems = () => {
  const savedCartItems = localStorage.getItem("cartItems");
  return savedCartItems ? JSON.parse(savedCartItems) : [];
};

const initialState = {
  items: getSavedCartItems(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];

      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export default cartSlice.reducer;