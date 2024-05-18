import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { $authHost } from "../../http/index";

export const fetchAddInBasket = createAsyncThunk("basket/fetchAddInBasket", async (params) => {
  try {
    const response = await $authHost.post("/api/basket", params);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while processing your request.");
    }
  }
});

const initialState = {
  status: "",
  message: null,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    resetBasket(state) {
      state.status = "";
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddInBasket.pending, (state) => {
        state.status = "loading";
        state.message = null;
      })
      .addCase(fetchAddInBasket.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = "loaded";
      })
      .addCase(fetchAddInBasket.rejected, (state, action) => {
        if (action.error.message) {
          state.message = action.error.message;
        } else {
          state.message = "An error occurred while processing your request.";
        }
        state.status = "error";
      });
  },
});

export const { resetBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
