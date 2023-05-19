import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./slices/events";
import { filterReducer } from "./slices/filter";
import { authReducer } from "./slices/auth";
import { modalReducer } from "./slices/modal";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
    auth: authReducer,
    modal: modalReducer,
  },
});

export default store;
