import React, { Component } from "react";
import "../../assets/stylesheets/warBoard.css";
import backOfCard from "../../assets/images/p1Back.jpg";

class WarBoard extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {}
  render() {
    const {
      card1Image,
      card2Image,
      card1,
      card2,
      p1Image4,
      p1Card4,
      p2Image4,
      p2Card4
    } = this.props;
    return (
      <div>
        <strong>You</strong>
        <div className="card1-container container">
          <img src={card1Image} alt={card1} className="war-card-match"></img>

          <img
            src={backOfCard}
            alt="face down card"
            className="card-1 back-of-card"
          ></img>
          <img
            src={backOfCard}
            alt="face down card"
            className="card-2 back-of-card"
          ></img>
          <img
            src={backOfCard}
            alt="face down card"
            className="card-3 back-of-card"
          ></img>
          <img src={p1Image4} alt={p1Card4} className="card-4 top-card"></img>
        </div>
        <strong>Computer</strong>
        <div className="card2-container container">
          <img src={card2Image} alt={card2} className="war-card-match"></img>

          <img
            src={backOfCard}
            alt="face down card"
            className="card-4 back-of-card"
          ></img>
          <img
            src={backOfCard}
            alt="face down card"
            className="card-5 back-of-card"
          ></img>
          <img
            src={backOfCard}
            alt="face down card"
            className="card-6 back-of-card"
          ></img>
          <img src={p2Image4} alt={p2Card4} className="card-7 top-card"></img>
        </div>
      </div>
    );
  }
}

export default WarBoard;
