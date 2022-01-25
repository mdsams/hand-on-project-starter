import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Login from "../../components/Login/login";
// import ApiForm from "../../components/ApiForm/ApiForm";
class Loggedin extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        {/* <ApiForm /> */}
      </div>
    );
  }
}

export default Loggedin;
