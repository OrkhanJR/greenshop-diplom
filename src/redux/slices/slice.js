import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const slice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    testReducer: () => {
      console.log("hi");
    },
  },
});

export const {testReducer} = slice.actions;

export default slice.reducer;