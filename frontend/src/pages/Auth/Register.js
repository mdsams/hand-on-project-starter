import React, { useState, useRef } from "react";
import "./Register.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
function Register({ setShowModel }) {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  //close the model when clicking outside the model
  const modelRef = useRef();
  const closeModel = (e) => {
    if (e.target === modelRef.current) {
      setShowModel(false);
    }
  };
  return ReactDOM.createPortal(
    <div ref={modelRef} onClick={closeModel} className="modelContainer">
      <div className="model">
        <form>
          <div className="formElement">
            <h2 id="text">Create A New Account</h2>
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
              onClick={() => setShowModel(false)}
              // onSubmit={handleSubmit}
            >
              Login
            </button>
            <p></p>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal"),
  );
}

Register.propTypes = {
  setShowModel: PropTypes.func,
};
export default Register;
