import React from "react";
import Fitcha from "./Fitcha";

import style from "./Home.module.scss";
import PreviewEvents from "./PreviewEvent";

const Home = () => {
  return (
    <div className={style.home}>
      <Fitcha />
      <PreviewEvents />
    </div>
  );
};

export default Home;
