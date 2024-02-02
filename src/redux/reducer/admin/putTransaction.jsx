import { createSlice } from "@reduxjs/toolkit";

const Updatepasslicers = createSlice({
  name: "updatepass",
  initialState: {
    update: "",
  },
  reducers: {
    setupdatepass: (state, action) => {
      state.updatepass = action.payload;
    },
  },
});

export const { setupdatepass, userId } = Updatepasslicers.actions;

export default Updatepasslicers.reducer;
