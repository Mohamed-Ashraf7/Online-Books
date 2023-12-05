import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import BookSlice from "./BookSlice";
import userSlice from "./authSlice";

const store = configureStore({
  reducer: { modalSlice, BookSlice, userSlice },
});
export default store;
