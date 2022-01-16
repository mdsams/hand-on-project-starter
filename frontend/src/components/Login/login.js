import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment className="main">
        <div className="rectangleBox">
          <h1 className="primaryText">Welcome To Your Dashboard</h1>
          <h2 className="secondaryText">
            Your uploaded APIs will be displayed here once you login to your
            account
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
