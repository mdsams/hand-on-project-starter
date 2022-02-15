import React from "react";
import "./LoggedOut.css";
import Avatar from "../../images/avatar.svg";

function LoggedOut() {
  return (
    <div className="loggingmain">
      <div className="rectangleBox">
        <div className="rightElement">
          <img src={Avatar} alt="Avatar" id="avatar" />
          <h1>Welcome To Your Dashboard</h1>
          <h2>
            Your uploaded APIs will be displayed here once you login to your
            account
          </h2>
        </div>
      </div>
      <div className="form">
        <form>
          <div className="formElement">
            <h2 id="text">Login to your Account</h2>
            <input
              placeholder="Email"
              name="Email"
              required
              id="emailAddress"
            />
            <input
              placeholder="Password"
              required
              type="password"
              id="password"
              name="Password"
            />

            <button
              id="loggedbutton"
              type="submit"
              value="submit"
              color="primary"
            >
              Login/Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoggedOut;
