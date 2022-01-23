import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Loggedin from "./pages/LoggedIn/Loggedin";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Dashboard /> */}
        <Loggedin />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
