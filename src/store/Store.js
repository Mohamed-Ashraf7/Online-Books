import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import BookSlice from "./BookSlice";

export default configureStore({
  reducer: { modalSlice, BookSlice },
});
