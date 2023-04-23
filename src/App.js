import { BrowserRouter } from "react-router-dom";

import "./style/app.css";

import AppRouter from "./components/AppRouter";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTopOnMount />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
