import React, { useState } from "react";
import "./Auth.css";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/avatar.svg";
import Cuvette from "../../images/cuvette.svg";
import Register from "./Register";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [showModel, setShowModel] = useState(false);
  let history = useHistory();

  function registerModel() {
    setShowModel(!showModel);
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/");
    // setEmail(email);
    // setpassword(password);
    // setIsLoggedIn(true);
    console.log(email + "\n" + password);
  }

  return (
    <div className="loggingmain">
      <img src={Cuvette} alt="Cuvette" className="Cuvette" />

      <div className="rectangleBox">
        <div className="rightElement">
          <img src={Avatar} alt="Avatar" id="avatar" />
          <h1>Welcome To Your Dashboard</h1>
          <h2>
            Your uploaded APIs will be displayed here once you login to your
            account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <h2 id="text">Login to your Account</h2>
          <input
            placeholder="Email"
            name="Email"
            required
            id="emailAddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            required
            type="password"
            id="password"
            name="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            id="loggedbutton"
            type="submit"
            value="submit"
            color="primary"
            onSubmit={handleSubmit}
          >
            Login
          </button>
          <p>
            Not Registered? Click Here to{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => registerModel()}
            >
              SignUp
            </span>
            {showModel ? <Register setShowModel={setShowModel} /> : null}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Auth;
