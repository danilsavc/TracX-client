import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <div className='wrapper'>
        <Header />
      </div>
      <div className='wrapper'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
