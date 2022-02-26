import React from "react";
import "./ApiForm.css";

const ApiForm = () => {
  return (
    <div className="outerBox">
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
    </div>
  );
};

export default ApiForm;
