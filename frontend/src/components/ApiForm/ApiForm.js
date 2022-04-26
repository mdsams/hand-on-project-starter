import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./ApiForm.css";

const ApiForm = ({ setApiButtonOpen }) => {
  const [apiImage, setImageApi] = useState(null);
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
          {apiImage ? (
            <img
              alt="not found"
              width={"100px"}
              height={"100px"}
              src={URL.createObjectURL(apiImage)}
            />
          ) : (
            <>
              <img
                alt="not found"
                id="inputarea"
                width={"15px"}
                height={"15px"}
                src={apiImage}
              />
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setImageApi(event.target.files[0]);
                }}
              />
            </>
          )}
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
