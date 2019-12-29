import React, { Component } from "react";
import "../assets/stylesheets/durakHand.css";
class DurakHand extends Component {
  state = {};
  render() {
    const { image, suit, rank, id } = this.props;
    var cardKey = `durak-player-card durak-card-${id}`;
    return (
      <>
        <div className="player-hand">
          <div className={cardKey}>
            <img src={image} alt={rank + suit} />
          </div>
        </div>
      </>
    );
  }
}

export default DurakHand;
