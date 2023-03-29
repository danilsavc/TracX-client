import React from "react";
import Fitcha from "./Fitcha";

import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <Fitcha />
    </div>
  );
};

export default Home;
