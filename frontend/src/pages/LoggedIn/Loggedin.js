import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Login from "../../components/Login/login";
// import RouterComponent from "../../components/Router/RouterComponent";

class Loggedin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default Loggedin;
