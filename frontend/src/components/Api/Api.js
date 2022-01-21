import React, { Component } from "react";
import CARDS from "./Apiinfo";
// import Img from "../../images/img.png";
import "./Api.css";

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARDS,
    };
  }

  render() {
    const APIS = this.state.cards.map((card) => {
      return (
        <div key={card.id} className="card">
          <img src={card.img} alt={card.name} className="cardMedia" />
          <h1> {card.name} </h1>
          <p className="title">{card.description}</p>
          <p>
            <button>Share</button>
          </p>
        </div>
      );
    });
    return <div className="container">{APIS}</div>;
  }
}

export default Api;
