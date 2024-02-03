import { createSlice } from "@reduxjs/toolkit";

const showUsersSlice = createSlice({
  name: "showUsers",
  initialState: [],
  reducers: {
    showUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { showUsers } = showUsersSlice.actions;
export default showUsersSlice.reducer;
