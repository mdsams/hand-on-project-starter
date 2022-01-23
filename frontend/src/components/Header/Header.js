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
    this.handliClick = this.handliClick.bind(this);
  }

  handliClick() {
    this.setState((prevState) => ({
      isToggleLoginButton: !prevState.isToggleLoginButton,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <img src={cuvette} alt="cuvette" id="cuvette" />
          <button onClick={this.handliClick}>
            <text className="buttonText">
              {this.state.isToggleLoginButton ? "Login/Signup" : "+New Api"}
            </text>
          </button>
          {this.state.isToggleLoginButton || <RouterComponent />}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
