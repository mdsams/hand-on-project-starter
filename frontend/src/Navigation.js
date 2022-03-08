import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import MyAccount from "./pages/MyAccount/MyAccount";
import MyApis from "./pages/MyApis/MyApis";
import Auth from "./pages/Auth/Auth";
import ApiContainer from "./pages/ApiContainer/ApiContainer.js";
// import Header from "./components/Header/Header.js";

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/ApiContainer">
          <ApiContainer />
        </Route>
        <Route path="/myaccount">
          <MyAccount />
        </Route>
        <Route path="/myapis">
          <MyApis />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
