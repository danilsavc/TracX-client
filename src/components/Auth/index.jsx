import React from "react";
import Login from "./Login";
import Registration from "./Registration";

const Auth = () => {
  const [reg, setReg] = React.useState(true);
  return reg ? <Login setReg={setReg} /> : <Registration setReg={setReg} />;
};

export default Auth;
