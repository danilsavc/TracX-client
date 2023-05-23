import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./slices/events";
import { filterReducer } from "./slices/filter";
import { authReducer } from "./slices/auth";
import { modalReducer } from "./slices/modal";
import { basketReducer } from "./slices/addBasket";
import { viewBasketReducer } from "./slices/viewBasket";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
    auth: authReducer,
    modal: modalReducer,
    basket: basketReducer,
    viewBasket: viewBasketReducer,
  },
});

export default store;
