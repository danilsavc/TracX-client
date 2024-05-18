import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost } from "../../http/index";

export const fetchViewBasket = createAsyncThunk("viewBasket/fetchViewBasket", async () => {
  try {
    const { data } = await $authHost.get("/api/basket");
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while processing your request.");
    }
  }
});

export const fetchBasketEvents = createAsyncThunk(
  "viewBasket/fetchBasketEvents",
  async (params) => {
    try {
      const { data } = await $authHost.post("/api/basket/basket-events", params);
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

export const fetchDeleteEvent = createAsyncThunk("viewBasket/fetchDeleteEvent", async (params) => {
  try {
    const { id } = params;
    const data = await $authHost.delete(`/api/basket/${id}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An error occurred while processing your request.");
    }
  }
});

const initialState = {
  data: null,
  status: "",
  message: null,
  arr_id: [],
  arr_id_status: "",
  events: [],
  status_events: "",
  message_events: null,
  status_delete: "",
  message_delete: null,
};

const viewBasketSlice = createSlice({
  name: "viewBasket",
  initialState,
  reducers: {
    resetViewBasket(state) {
      state.status = "";
      state.message = null;
      state.data = null;
    },
    events_id(state) {
      if (state.data) {
        state.arr_id = state.data.map((element) => element.eventId);
        state.arr_id_status = "loaded";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchViewBasket.pending, (state) => {
        state.status = "loading";
        state.data = null;
      })
      .addCase(fetchViewBasket.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchViewBasket.rejected, (state, action) => {
        if (action.error.message) {
          state.message = action.error.message;
        } else {
          state.message = "An error occurred while processing your request.";
        }
        state.status = "error";
      })
      .addCase(fetchBasketEvents.pending, (state) => {
        state.status_events = "loading";
        state.events = null;
      })
      .addCase(fetchBasketEvents.fulfilled, (state, action) => {
        state.events = action.payload;
        state.status_events = "loaded";
      })
      .addCase(fetchBasketEvents.rejected, (state, action) => {
        if (action.error.message) {
          state.message_events = action.error.message;
        } else {
          state.message_events = "An error occurred while processing your request.";
        }
        state.status_events = "error";
      })
      .addCase(fetchDeleteEvent.pending, (state) => {
        state.status_delete = "loading";
        state.message_delete = null;
      })
      .addCase(fetchDeleteEvent.fulfilled, (state, action) => {
        state.message_delete = action.payload.data.message;
        state.status_delete = "loaded";
      })
      .addCase(fetchDeleteEvent.rejected, (state, action) => {
        if (action.error.message) {
          state.message_delete = action.error.message;
        } else {
          state.message_delete = "An error occurred while processing your request.";
        }
        state.status_delete = "error";
      });
  },
});

export const { resetBasket, events_id } = viewBasketSlice.actions;

export const viewBasketReducer = viewBasketSlice.reducer;
