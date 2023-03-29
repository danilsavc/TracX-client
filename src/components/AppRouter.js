import React from "react";
import { Routes, Route } from "react-router-dom";

import Contacts from "./Contacts";
import Home from "./Home";
import Items from "./Items";
import Junior from "./Junior";
import Login from "./Login";
import Registration from "./Registration";
import Reviews from "./Reviews";
import OneItems from "./OneItems";
import Layout from "./Layout";
import {
  CONTACTS_ROUTE,
  ITEMS_ROUTE,
  JUNIOR_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  REVIEWS_ROUTE,
} from "../utils/consts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={REVIEWS_ROUTE} element={<Reviews />}></Route>
        <Route path={JUNIOR_ROUTE} element={<Junior />}></Route>
        <Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
        <Route path={ITEMS_ROUTE} element={<Items />}></Route>
        <Route path={ITEMS_ROUTE + "/:id"} element={<OneItems />}></Route>
        <Route path={REGISTRATION_ROUTE} element={<Registration />}></Route>
        <Route path={LOGIN_ROUTE} element={<Login />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
