import { createSlice } from "@reduxjs/toolkit";
const initialState = { isOpen: false, componentName: null, Props: {} };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.name;
      state.Props = action.payload.Props;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.componentName = null;
      state.Props = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
