import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index";

export const fetchModerEvents = createAsyncThunk("ModerEvents/fetchModerEvents", async (params) => {
  const { currentPage, userId } = params;
  const { data } = await $authHost.post(
    `/api/event/moderator-events/?page=${currentPage}&limit=${6}`,
    { userId }
  );
  return data;
});

export const fetchDeleteModerEvent = createAsyncThunk(
  "ModerEvents/fetchDeleteModerEvent",
  async (params) => {
    try {
      const { id } = params;
      const data = await $authHost.delete(`/api/event/${id}`);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error("An error occurred while processing your request.");
      }
    }
  }
);

const initialState = {
  items: [],
  status: "loading",
  countPage: 1,
  currentPage: 1,
  message_delete: null,
  status_delete: null,
};

const moderEventsSlice = createSlice({
  name: "ModerEvents",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchModerEvents.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchModerEvents.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.countPage = actions.payload.totalPages;
      state.status = "loaded";
    },
    [fetchModerEvents.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
    [fetchDeleteModerEvent.pending]: (state) => {
      state.status_delete = "loading";
      state.message_delete = null;
    },
    [fetchDeleteModerEvent.fulfilled]: (state, action) => {
      state.message_delete = action.payload.data.message;
      state.status_delete = "loaded";
    },
    [fetchDeleteModerEvent.rejected]: (state, action) => {
      if (action.error.message) {
        state.message_delete = action.error.message;
      } else {
        state.message_delete = "An error occurred while processing your request.";
      }
      state.status_delete = "error";
    },
  },
});

export const { setCurrentPage } = moderEventsSlice.actions;
export const ModerEventsReducer = moderEventsSlice.reducer;
