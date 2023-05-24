import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../Redux/slices/auth";

import Contacts from "./Contacts";
import Home from "./Home";
import Events from "./Events";
import AboutUs from "./AboutUs";
import EventDetails from "./Events/EventDetails";
import PersonalAccount from "./PersonalAccount";
import Layout from "./Layout";
import {
  CONTACTS_ROUTE,
  EVENTS_ROUTE,
  ABOUTUS_ROUTE,
  PERSONALACCOUNT_ROUTE,
  ADMIN_ROUTE,
  MODERATOR_ROUTE,
} from "../utils/consts";
import Admin from "./Admin";
import Moderator from "./Moderator";

const AppRouter = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={ABOUTUS_ROUTE} element={<AboutUs />}></Route>
        <Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
        <Route path={EVENTS_ROUTE} element={<Events />}></Route>
        <Route path={EVENTS_ROUTE + "/:id"} element={<EventDetails />}></Route>
        <Route path={PERSONALACCOUNT_ROUTE} element={<PersonalAccount />}></Route>
        <Route path={ADMIN_ROUTE} element={<Admin />}></Route>
        <Route path={MODERATOR_ROUTE} element={<Moderator />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
