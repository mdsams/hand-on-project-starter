import React, { Component } from "react";
import ApiForm from "../ApiForm/ApiForm";
import { NavLink } from "react-router-dom";
import "./RouterComponent.css";
class RouterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isApiButtonOpen: false,
    };
    this.handleAPI = this.handleAPI.bind(this);
  }
  handleAPI = (e) => {
    e.preventDefault();
    this.setState({
      isApiButtonOpen: !this.state.isApiButtonOpen,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <button onClick={this.handleAPI}>
            <text className="buttonText">+New Api</text>
          </button>
          <div className="link">
            <NavLink
              to="/MyAccount"
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
        {this.state.isApiButtonOpen ? <ApiForm /> : null}
      </React.Fragment>
    );
  }
}

export default RouterComponent;
