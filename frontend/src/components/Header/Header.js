import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { NavLink } from "react-router-dom";
import "./Header.css";
import cuvette from "../../images/cuvette.svg";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={cuvette} alt="cuvette" id="cuvette" />
          {/* <NavLink
            to="#"
            className={(isActive) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
          >
            About
          </NavLink> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
