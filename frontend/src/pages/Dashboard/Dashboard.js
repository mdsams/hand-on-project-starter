import Api from "../../components/Api/Api";
import Header from "../../components/Header/Header";
import "./Dashboard.css";
import React from "react";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="container">
        <Api />
      </div>
    </div>
  );
}

export default Dashboard;
