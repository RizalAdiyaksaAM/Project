import { createSlice } from "@reduxjs/toolkit";

const initialState = { penjual: ""};

const penjualSlicer = createSlice({
  name: "penjualAuth",
  initialState,
  reducers: {
    setpenjual: (state, action) => {
      state.penjual = action.payload;
    },
  },
});

export const {  setpenjual } = penjualSlicer.actions;

export default penjualSlicer.reducer;