import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index";
import jwt_decode from "jwt-decode";

export const fetchSearchUser = createAsyncThunk("searchUser/fetchAddFormat", async (params) => {
  try {
    const { data } = await $authHost.post("/api/user/getUserByEmail", params);

    return jwt_decode(data.token);
  } catch (error) {
    if (error.response.data.errors) {
      throw new Error(JSON.stringify(error.response.data.errors));
    }
    if (error.response.data.message) {
      throw new Error(JSON.stringify(error.response.data.message));
    }
  }
});

const initialState = {
  data: [],
  badReq: null,
  status: null,
};

const searchUserSlice = createSlice({
  name: "searchUser",
  initialState,
  reducers: {
    resetData(state) {
      state.data = [];
      state.badReq = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchUser.pending, (state) => {
        state.status = "loading";
        state.badReq = null;
      })
      .addCase(fetchSearchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
        state.badReq = null;
      })
      .addCase(fetchSearchUser.rejected, (state, action) => {
        state.badReq = JSON.parse(action.error.message);
        state.status = "error";
      });
  },
});

export const { resetData } = searchUserSlice.actions;

export const searchUserReducer = searchUserSlice.reducer;
