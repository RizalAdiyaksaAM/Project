import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: ""};

const userSlicer = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {  setUser } = userSlicer.actions;

export default userSlicer.reducer;