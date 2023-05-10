import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http/index";

const createAsyncThunkWithStatus = (type, url) => {
  return createAsyncThunk(type, async () => {
    const { data } = await $host.get(url);
    return data;
  });
};

export const fetchCategory = createAsyncThunkWithStatus("category/fetchCategory", "/api/category");
export const fetchFormat = createAsyncThunkWithStatus("format/fetchFormat", "/api/format");

const initialState = {
  category: [],
  currentCategory: "Категорія",
  currentCategoryId: 0,
  format: [],
  currentFormat: "Формат",
  currentFormatId: 0,
  status: "loading",
};

const filterSlice = createSlice({
  name: "format",
  initialState,
  reducers: {
    setCurentCategory(state, action) {
      state.currentCategory = action.payload;
    },
    setCurentCategoryId(state, action) {
      state.currentCategoryId = action.payload;
    },
    setCurentFormat(state, action) {
      state.currentFormat = action.payload;
    },
    setCurentFormatId(state, action) {
      state.currentFormatId = action.payload;
    },
  },
  extraReducers: {
    [fetchCategory.pending]: (state) => {
      state.category = [];
      state.status = "loading";
    },
    [fetchCategory.fulfilled]: (state, action) => {
      state.category = action.payload;
      state.status = "loaded";
    },
    [fetchCategory.rejected]: (state) => {
      state.category = [];
      state.status = "error";
    },
    [fetchFormat.pending]: (state) => {
      state.format = [];
      state.status = "loading";
    },
    [fetchFormat.fulfilled]: (state, action) => {
      state.format = action.payload;
      state.status = "loaded";
    },
    [fetchFormat.rejected]: (state) => {
      state.format = [];
      state.status = "error";
    },
  },
});

export const { setCurentCategory, setCurentCategoryId, setCurentFormat, setCurentFormatId } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
