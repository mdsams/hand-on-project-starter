import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import { NavLink } from "react-router-dom";
import ApiForm from "../ApiForm/ApiForm";
import cuvette from "../../images/cuvette.svg";

import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  const [isApiButtonOpen, setApiButtonOpen] = useState(false);

  // useEffect(() => {
  //   // const token = localStorage.getItem("token");
  //   if (state.token !== null) {
  //     dispatch({ type: "authentication", auth: !state.auth });
  //   }
  // }, []);
  const handleClick = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    dispatch({ type: "authentication", token: token });
    history.push("/auth");
  };

  const handleAPI = (e) => {
    e.preventDefault();
    setApiButtonOpen(!isApiButtonOpen);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <img
          src={cuvette}
          alt="cuvette"
          id="cuvette"
          onClick={() => <Redirect to="/ApiContainer" />}
        />
        {state.auth ? (
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
      {isApiButtonOpen ? <ApiForm setApiButtonOpen={setApiButtonOpen} /> : null}
    </React.Fragment>
  );
};

export default Header;
