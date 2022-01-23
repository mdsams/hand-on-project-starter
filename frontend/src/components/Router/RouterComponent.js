import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./RouterComponent.css";
class RouterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <button onClick={this.handliClick}>
            <text className="buttonText">+New Api</text>
          </button>
          <div className="link">
            <NavLink
              to="/Account"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              My Account
            </NavLink>
            <NavLink to="/MyApis" id="myapi">
              My Apis
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RouterComponent;
