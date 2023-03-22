import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Items from "../pages/Items";
import Junior from "../pages/Junior";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Reviews from "../pages/Reviews";
import {
  CONTACTS_ROUTE,
  ITEMS_ROUTE,
  JUNIOR_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  REVIEWS_ROUTE,
} from "../utils/consts";
import OneItems from "./OneItems";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path={REVIEWS_ROUTE} element={<Reviews />}></Route>
      <Route path={JUNIOR_ROUTE} element={<Junior />}></Route>
      <Route path={CONTACTS_ROUTE} element={<Contacts />}></Route>
      <Route path={ITEMS_ROUTE} element={<Items />}></Route>
      <Route path={ITEMS_ROUTE + "/:id"} element={<OneItems />}></Route>
      <Route path={REGISTRATION_ROUTE} element={<Registration />}></Route>
      <Route path={LOGIN_ROUTE} element={<Login />}></Route>
    </Routes>
  );
};

export default AppRouter;
