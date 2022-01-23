import React, { Component } from "react";

class ApiForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Add New API</h1>
          <input
            type="text"
            placeholder="API Name"
            name="ApiName"
            required
          ></input>
          <input
            type="text"
            placeholder="API End Point"
            name="ApiName"
            required
          ></input>
          <textarea cols={}
        </form>
      </div>
    );
  }
}

export default ApiForm;
