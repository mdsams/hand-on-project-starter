import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ApiForm from "../ApiForm/ApiForm";
import cuvette from "../../images/cuvette.svg";
// import { createBrowserHistory as history } from "history";
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
    e.preventDefault();
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
            <button onClick={this.handleClick}>
              <text className="buttonText">Login/Signup</text>
            </button>
          ) : (
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
          )}
        </div>
        {this.state.isApiButtonOpen ? (
          <ApiForm closeModal={this.closeModal} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Header;
