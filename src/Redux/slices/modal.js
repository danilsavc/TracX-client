import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state) {
      state.state = true;
    },
    closeModal(state) {
      state.state = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
