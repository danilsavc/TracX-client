import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../http/index";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async (params) => {
  const { currentCategoryId, currentFormatId } = params;

  if (currentFormatId === 0 && currentCategoryId > 0) {
    const { data } = await $host.get(
      `/api/event/?categoryId=${currentCategoryId}&page=1&limit=${20}`
    );
    return data;
  }

  if (currentCategoryId === 0 && currentFormatId > 0) {
    const { data } = await $host.get(`/api/event/?formatId=${currentFormatId}&page=1&limit=${20}`);
    return data;
  }

  if (currentCategoryId === 0 && currentFormatId === 0) {
    const { data } = await $host.get(`/api/event/?page=1&limit=${20}`);
    return data;
  }

  const { data } = await $host.get(
    `/api/event/?categoryId=${currentCategoryId}&formatId=${currentFormatId}&page=1&limit=${20}`
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
      state.status = "loaded";
      state.countPage = actions.payload.countPage;
    },
    [fetchEvents.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const { setCurrenPage } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
