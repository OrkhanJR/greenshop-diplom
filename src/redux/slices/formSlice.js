import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFormValid: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValidity(state, action) {
      state.isFormValid = action.payload;
    },
  },
});

export const { setFormValidity } = formSlice.actions;

export const selectFormValidity = (state) => state.form.isFormValid;

export default formSlice.reducer;