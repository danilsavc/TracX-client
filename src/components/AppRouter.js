import React from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "./Contacts";
import Home from "./Home";
import Events from "./Events";
import AboutUs from "./AboutUs";
import EventDetails from "./Events/EventDetails";
import Layout from "./Layout";
import { CONTACTS_ROUTE, EVENTS_ROUTE, ABOUTUS_ROUTE } from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={ABOUTUS_ROUTE} element={<AboutUs />}></Route>
        <Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
        <Route path={EVENTS_ROUTE} element={<Events />}></Route>
        <Route path={EVENTS_ROUTE + "/:id"} element={<EventDetails />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
