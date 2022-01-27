import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ApiForm from "../ApiForm/ApiForm";
import cuvette from "../../images/cuvette.svg";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();
import { withRouter } from "react-router-dom";

import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleLoginButton: true,
      isApiButtonOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAPI = this.handleAPI.bind(this);
  }

  handleClick = (e) => {
    console.log(history);
    e.preventDefault();
    history.push("dashboard");
    this.setState({
      isToggleLoginButton: !this.state.isToggleLoginButton,
    });
  };
  handleAPI = (e) => {
    e.preventDefault();
    this.setState({
      isApiButtonOpen: !this.state.isApiButtonOpen,
    });
  };

  // toggleScrollLock = () => {
  //   document.querySelector("html").classList.toggle("scroll-lock");
  // };

  // onKeyDown = (event) => {
  //   if (event.keyCode === 27) {
  //     this.closeModal();
  //   }
  // };
  // onClickOutside = (event) => {
  //   if (this.modal && this.modal.contains(event.target)) return;
  //   this.closeModal();
  // };
  // closeModal = () => {
  //   this.setState({ isApiButtonOpen: false });
  //   this.closeModal();
  //   this.onKeyDown();
  //   this.onClickOutside();
  //   this.toggleScrollLock();
  // };

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={cuvette} alt="cuvette" id="cuvette" />
          {this.state.isToggleLoginButton ? (
            <button className="buttonText" onClick={this.handleClick}>
              Login/Signup
            </button>
          ) : (
            <div className="nav">
              <button className="buttonText" onClick={this.handleAPI}>
                +New Api
              </button>
              <div className="link">
                <NavLink
                  to="/myaccount"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  My Account
                </NavLink>
                <NavLink
                  to="/myapis"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                  id="myapi"
                >
                  My Apis
                </NavLink>
              </div>
            </div>
          )}
        </div>
        {this.state.isApiButtonOpen ? <ApiForm /> : null}
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
