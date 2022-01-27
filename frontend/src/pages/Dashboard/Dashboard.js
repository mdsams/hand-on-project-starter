// import React, { Component } from "react";
// // import Header from "../../components/Header/Header";

// import Login from "../../components/Login/login";
// class Loggedin extends Component {
//   render() {
//     return (
//       <div>
//         <Login />
//       </div>
//     );
//   }
// }

// export default Loggedin;

import React, { Component } from "react";
import Main from "../../images/main.svg";
import Api from "../../components/Api/Api";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="main">
        <img src={Main} alt="Main" id="main" />

        <div className="container">
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
          <Api />
        </div>
      </div>
    );
  }
}

export default Dashboard;
