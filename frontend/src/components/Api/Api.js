import React, { useState } from "react";
import CARDS from "./Apiinfo";
import "./Api.css";
import SelectedApi from "./SelectedApi";

const Api = () => {
  const [selectedCard, setSelectedCard] = useState(CARDS[0]);

  const APIS = CARDS.map((card) => {
    return (
      <div
        key={card.id}
        className="card"
        data-id={card.id}
        onClick={() => {
          setSelectedCard(card);
        }}
      >
        <img src={card.img} alt={card.name} className="cardMedia" />
        <h2> {card.name} </h2>
        <p className="title">{card.description}</p>
      </div>
    );
  });

  return (
    <div className="dashboard">
      <SelectedApi card={selectedCard} />
      <div className="container">{APIS}</div>
    </div>
  );
};

export default Api;
