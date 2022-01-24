import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Loggedin from "./pages/LoggedIn/Loggedin";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyApis from "./pages/MyApis/MyApis";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<Loggedin />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="MyApis" element={<MyApis />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
