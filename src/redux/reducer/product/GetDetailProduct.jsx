import { createSlice } from "@reduxjs/toolkit";

const initialState = { detail: ""};

const detailProductSlicer = createSlice({
  name: "penjualAuth",
  initialState,
  reducers: {
    setdetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const {  setdetail } = detailProductSlicer.actions;

export default detailProductSlicer.reducer;