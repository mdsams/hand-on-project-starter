import React, { Component } from "react";
import Main from "../../images/main.svg";
import Api from "../Api/Api";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="main">
        <img src={Main} alt="Main" id="main" />

        <div className="container">
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
        </div>
      </div>
    );
  }
}

export default Login;
