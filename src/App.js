import React from "react";

import "./style/app.css";

import AppRouter from "./components/AppRouter";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

function App() {
  return (
    <div className='App'>
      <ScrollToTopOnMount />
      <AppRouter />
    </div>
  );
}

export default App;
