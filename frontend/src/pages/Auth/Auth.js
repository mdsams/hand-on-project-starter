import useVerification from "../../hooks/useVerification";
import React, { useState } from "react";
import "./Auth.css";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/avatar.svg";
import Cuvette from "../../images/cuvette.svg";
import Register from "./Register";
// import { SIGNUP } from "../../service";

function Auth() {
  function formLogin() {
    history.push("/");
    // setEmail(email);
    // setpassword(password);
    // setIsLoggedIn(true);
    // SIGNUP(email, password);
    // resetEmail()
    // console.log(values + "\n" + password);
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  //Custom hook call
  const { handleChange, values, errors, handleSubmit } =
    useVerification(formLogin);

  // const [password, setpassword] = useState("");
  const [showModel, setShowModel] = useState(false);
  let history = useHistory();

  function registerModel() {
    setShowModel(!showModel);
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
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            id="emailAddress"
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            id="password"
            minLength="8"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
          <button
            id="loggedbutton"
            type="submit"
            value="submit"
            color="primary"
            // onSubmit={handleChange}
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
