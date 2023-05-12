import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http/index";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async (params) => {
  const { currentCategoryId, currentFormatId, currentPage, searchValue } = params;

  if (searchValue) {
    const { data } = await $host.get(
      `/api/event/?page=${currentPage}&limit=${6}&search=${searchValue}`
    );
    return data;
  }

  if (currentFormatId === 0 && currentCategoryId > 0) {
    const { data } = await $host.get(
      `/api/event/?categoryId=${currentCategoryId}&page=${currentPage}&limit=${6}`
    );
    return data;
  }

  if (currentCategoryId === 0 && currentFormatId > 0) {
    const { data } = await $host.get(
      `/api/event/?formatId=${currentFormatId}&page=${currentPage}&limit=${6}`
    );
    return data;
  }

  if (currentCategoryId === 0 && currentFormatId === 0) {
    const { data } = await $host.get(`/api/event/?page=${currentPage}&limit=${6}`);
    return data;
  }

  const { data } = await $host.get(
    `/api/event/?categoryId=${currentCategoryId}&formatId=${currentFormatId}&page=${currentPage}&limit=${6}`
  );
  return data;
});

const initialState = {
  items: [],
  status: "loading",
  countPage: 1,
  currentPage: 1,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchEvents.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.countPage = actions.payload.totalPages;
      state.status = "loaded";
    },
    [fetchEvents.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const { setCurrentPage } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
