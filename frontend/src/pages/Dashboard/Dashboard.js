import React from "react";
import "./Dashboard.css";
import Cuvette from "../../images/cuvette.svg";
import Avatar from "../../images/avatar.svg";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="container">
        <img src={Cuvette} alt="cuvette" id="cuvette" />
        <div className="rectangleBox">
          <img src={Avatar} alt="Avatar" id="avatar" />
          <h1 className="primaryText">Welcome To Your Dashboard</h1>
          <h2 className="secondaryText">
            Your uploaded APIs will be displayed here once you login to your
            account
          </h2>
        </div>
        <div className="form">
          <form>
            <div className="formElement">
              <text id="text">Log to your Account</text>
              <input type="text" id="emailAddress" name="Email Address" />
              <input type="password" id="password" name="Password" />
            </div>
            <button type="submit" value="submit" color="primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
