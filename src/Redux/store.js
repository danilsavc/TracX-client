import { configureStore } from "@reduxjs/toolkit";

import { eventsReducer } from "./slices/events";
import { filterReducer } from "./slices/filter";
import { authReducer } from "./slices/auth";
import { modalReducer } from "./slices/modal";
import { basketReducer } from "./slices/addBasket";
import { viewBasketReducer } from "./slices/viewBasket";
import { addFilterReducer } from "./slices/addFilters";
import { searchUserReducer } from "./slices/searchUser";
import { rolesReducer } from "./slices/roles";
import { ModerEventsReducer } from "./slices/moderEvents";

const store = configureStore({
  reducer: {
    events: eventsReducer,
    filter: filterReducer,
    addFilter: addFilterReducer,
    auth: authReducer,
    modal: modalReducer,
    basket: basketReducer,
    viewBasket: viewBasketReducer,
    searchUser: searchUserReducer,
    roles: rolesReducer,
    moderEvents: ModerEventsReducer,
  },
});

export default store;
