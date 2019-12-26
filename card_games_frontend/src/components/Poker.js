import React, { Component } from "react";
import "../assets/stylesheets/durak.css";
class Poker extends Component {
  state = {};
  render() {
    return (
      <>
        {" "}
        <div className="poker-container">
          {" "}
          <div className="game-table">
            <div className="outer-table">
              <div className="center-table">
                <div className="card-grid">
                  <div className="player1 seat">seat1</div>
                  <div className="player2 seat">seat2</div>
                  <div className="player3 seat">seat3</div>
                  <div className="player4 seat">seat4</div>
                  <div className="player5 seat">seat5</div>
                  <div className="player6 seat">seat6</div>
                  <div className="player7 seat">seat7</div>
                  <div className="player8 seat">seat8</div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Poker;
