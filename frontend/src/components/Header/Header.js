import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import { NavLink } from "react-router-dom";
import ApiForm from "../ApiForm/ApiForm";
import cuvette from "../../images/cuvette.svg";

import { useHistory } from "react-router-dom";

import "./Header.css";

const Header = () => {
  let history = useHistory();
  const [auth, setAuth] = useContext(UserContext);

  console.log(auth, setAuth);

  // const [isToggleLoginButton, setToggleLoginButton] = useState(true);
  const [isApiButtonOpen, setApiButtonOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/auth");
    setAuth(!auth);
    // useRef(isToggleLoginButton == false);
  };

  const handleAPI = (e) => {
    e.preventDefault();
    setApiButtonOpen(!isApiButtonOpen);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <img src={cuvette} alt="cuvette" id="cuvette" />
        {auth ? (
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
