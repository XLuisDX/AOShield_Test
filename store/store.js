import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./UsersSlice/UsersSlice";

export const store = configureStore({
  reducer: {
    users: UsersSlice,
  },
});
