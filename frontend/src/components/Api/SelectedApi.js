import React from "react";
import "./SelectedApi.css";

function SelectedApi(card) {
  console.log(card);
  return (
    <div className="ApiSelected">
      <div className="ApiSelected2">
        <img src={card.card.img} className="SelectedImage" />
      </div>
      <div className="SelectedApiDescSetting">
        <h1>{card.card.name}</h1>
        <p>100% Automatic And Free</p>
        <h3>{card.card.description}</h3>
      </div>
      <button className="SelectedApiButton">View App</button>
    </div>
  );
}

export default SelectedApi;
