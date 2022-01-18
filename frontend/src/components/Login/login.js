import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment className="main">
        <div className="rectangleBox">
          <div className="col-xs-6">
            <h1 className="primaryText">Welcome To Your Dashboard</h1>
            <h2 className="secondaryText">
              Your uploaded APIs will be displayed here once you login to your
              account
            </h2>
          </div>
        </div>
        <form onSubmit={this.handleLogin} className="form">
          <label>Username</label>
          <input type="text" id="username" name="username" />
          <label>Password</label>
          <input type="password" id="password" name="password" />
          <form check>
            <label check>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
          </form>
          <button type="submit" value="submit" color="primary">
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
