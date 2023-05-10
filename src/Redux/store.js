import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./slices/events";
import { filterReducer } from "./slices/filter";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
  },
});

export default store;
