import React, { Component } from "react";
import "./Header.css";
import cuvette from "../../images/cuvette.svg";
class Header extends Component {
  render() {
    constructor(props) {
      super(props)
    
      this.state = {
         primaryState:true,
      }
    }
    
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={cuvette} alt="cuvette" id="cuvette" />
          <button onClick={handleChange}>
            <text className="buttonText">Login/Signup</text>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
