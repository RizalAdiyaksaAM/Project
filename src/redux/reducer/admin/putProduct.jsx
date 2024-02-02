import { createSlice } from "@reduxjs/toolkit";

const UpdatepassProduk = createSlice({
  name: "updateproduk",
  initialState: {
    produk: "",
  },
  reducers: {
    setupdateProduk: (state, action) => {
      state.updateproduk = action.payload;
    },
  },
});

export const { setupdateProduk } = UpdatepassProduk.actions;

export default UpdatepassProduk.reducer;
