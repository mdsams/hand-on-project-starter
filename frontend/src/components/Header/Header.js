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

  handliClick = (e) => {
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
            <button onClick={this.handliClick}>
              <text className="buttonText">Login/Signup</text>
            </button>
          ) : null}
          {this.state.isToggleLoginButton || <RouterComponent />}
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
