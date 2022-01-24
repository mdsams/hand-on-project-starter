import React, { Component } from "react";
import "./ApiForm.css";
class ApiForm extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <form>
            <h1>Add New API</h1>
            <input type="text" placeholder="API Name" name="ApiName" required />
            <input
              type="text"
              placeholder="API End Point"
              name="ApiName"
              required
            />
            <textarea
              rows={4}
              cols={20}
              type="text"
              placeholder="API End Point"
              name="ApiName"
              required
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ApiForm;
