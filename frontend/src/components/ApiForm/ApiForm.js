import React, { useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./ApiForm.css";

const ApiForm = ({ setApiButtonOpen }) => {
  //close the model when clicking outside the model
  const modelRef = useRef();
  const closeModel = (e) => {
    if (e.target === modelRef.current) {
      setApiButtonOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <div ref={modelRef} onClick={closeModel} className="outerBox">
      <div className="innerBox">
        <form>
          <h1>Add New API</h1>
          <input
            type="text"
            placeholder="API Name"
            name="ApiName"
            required
            id="input1"
          />
          <input
            type="text"
            placeholder="API End Point"
            name="ApiEndPoint"
            required
            id="input2"
          />
          <textarea
            rows={6}
            cols={20}
            type="text"
            placeholder="API End Point"
            name="ApiName"
            required
            id="textarea"
          />
          <button type="button" className="submitbtn" id="button">
            Add API
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

ApiForm.propTypes = {
  setApiButtonOpen: PropTypes.func,
};

export default ApiForm;
