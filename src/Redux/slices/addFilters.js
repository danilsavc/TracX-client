import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index";

export const fetchAddCategory = createAsyncThunk("addFilters/fetchAddCategory", async (params) => {
  try {
    const response = await $authHost.post("/api/category", params);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while processing your request.");
    }
  }
});

export const fetchAddFormat = createAsyncThunk("addFilters/fetchAddFormat", async (params) => {
  try {
    const response = await $authHost.post("/api/format", params);
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
  message: null,
  status: null,
  format_message: null,
  format_status: null,
};

const addFilterSlice = createSlice({
  name: "addFilters",
  initialState,
  reducers: {
    resetData(state) {
      state.message = null;
      state.status = null;
      state.format_message = null;
      state.format_status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddCategory.pending, (state) => {
        state.message = null;
        state.status = "loading";
      })
      .addCase(fetchAddCategory.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.status = "loaded";
      })
      .addCase(fetchAddCategory.rejected, (state, action) => {
        if (action.error.message) {
          state.message = action.error.message;
        } else {
          state.message = "An error occurred while processing your request.";
        }
        state.status = "error";
      })
      .addCase(fetchAddFormat.pending, (state) => {
        state.format_message = null;
        state.format_status = "loading";
      })
      .addCase(fetchAddFormat.fulfilled, (state, action) => {
        state.format_message = action.payload.message;
        state.format_status = "loaded";
      })
      .addCase(fetchAddFormat.rejected, (state, action) => {
        if (action.error.message) {
          state.format_message = action.error.message;
        } else {
          state.format_message = "An error occurred while processing your request.";
        }
        state.format_status = "error";
      });
  },
});

export const { resetData } = addFilterSlice.actions;

export const addFilterReducer = addFilterSlice.reducer;
