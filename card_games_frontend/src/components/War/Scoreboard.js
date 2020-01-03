import React, { Component } from "react";

class Scoreboard extends Component {
  state = {};

  render() {
    const { userScore, computerScore } = this.props;
    return (
      <div className="score-grid-container">
        <div className=" player-score-label">Your Score</div>
        <div className=" computer-score-label">Computer Score</div>
        <div className="player-score">{userScore}</div>
        <div className="computer-score">{computerScore}</div>
      </div>
    );
  }
}

export default Scoreboard;
