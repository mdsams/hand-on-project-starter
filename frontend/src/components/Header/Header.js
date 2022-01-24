import React, { Component } from "react";
import RouterComponent from "../Router/RouterComponent";
import cuvette from "../../images/cuvette.svg";
import "./Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleLoginButton: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      isToggleLoginButton: !this.state.isToggleLoginButton,
    });
  };

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
            <RouterComponent />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
