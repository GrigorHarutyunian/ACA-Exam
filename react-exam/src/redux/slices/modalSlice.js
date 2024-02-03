import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    changeModalState: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeModalState } = modalSlice.actions;
export default modalSlice.reducer;
