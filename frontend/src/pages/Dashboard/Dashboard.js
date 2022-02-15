import React from "react";
import Main from "../../images/main.svg";
import Api from "../../components/Api/Api";
import "./Dashboard.css";

function Dashboard() {
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

export default Dashboard;
