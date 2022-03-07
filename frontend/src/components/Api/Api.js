import React, { useState } from "react";
import CARDS from "./Apiinfo";
import "./Api.css";
import SelectedApi from "./SelectedApi";

const Api = () => {
  const [cards] = useState(CARDS);
  const [selectedCard, setSelectedCard] = useState(cards[0]);

  const APIS = cards.map((card) => {
    return (
      <div
        key={card.id}
        className="card"
        data-id={card.id}
        onClick={() => {
          console.log("clicked");
          setSelectedCard(card);
        }}
      >
        <img src={card.img} alt={card.name} className="cardMedia" />
        <h1> {card.name} </h1>
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
