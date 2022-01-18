import React, { Component } from "react";
import "./Header.css";
import cuvette from "../../images/cuvette.svg";
class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={cuvette} alt="cuvette" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
