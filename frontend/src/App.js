import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyApis from "./pages/MyApis/MyApis";
import LoggedOut from "./pages/LoggedOut/LoggedOut";
import "./App.css";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/loggedout">
          <LoggedOut />
        </Route>
        <Route path="/myaccount">
          <MyAccount />
        </Route>
        <Route path="myapis">
          <MyApis />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
