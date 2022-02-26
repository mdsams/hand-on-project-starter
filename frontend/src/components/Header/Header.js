import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ApiForm from "../ApiForm/ApiForm";
import cuvette from "../../images/cuvette.svg";

import { useHistory } from "react-router-dom";
// const history = createBrowserHistory();
// import { withRouter } from "react-router-dom";

import "./Header.css";

const Header = () => {
  let history = useHistory();

  const [isToggleLoginButton, setToggleLoginButton] = useState(true);
  const [isApiButtonOpen, setApiButtonOpen] = useState(false);

  const handleClick = (e) => {
    console.log(history);
    e.preventDefault();
    history.push("/loggedout");
    setToggleLoginButton(!isToggleLoginButton);
  };

  const handleAPI = (e) => {
    e.preventDefault();
    setApiButtonOpen(!isApiButtonOpen);
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

  return (
    <React.Fragment>
      <div className="navbar">
        <img src={cuvette} alt="cuvette" id="cuvette" />
        {isToggleLoginButton ? (
          <button className="buttonText" onClick={handleClick}>
            Login/Signup
          </button>
        ) : (
          <div className="nav">
            <button className="buttonText" onClick={handleAPI}>
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
      {isApiButtonOpen ? <ApiForm /> : null}
    </React.Fragment>
  );
};

export default Header;
