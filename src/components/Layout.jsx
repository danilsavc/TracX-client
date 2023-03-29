import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
