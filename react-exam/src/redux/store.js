import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import showUsersReducer from "./slices/showUsersSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    showUsers: showUsersReducer,
  },
});
