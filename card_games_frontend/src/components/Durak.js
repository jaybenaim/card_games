import React, { Component } from "react";
import axios from "axios";
import "../assets/stylesheets/durak.css";
import DurakStartScreen from "./DurakStartScreen";
import { Button, ButtonToolbar } from "react-bootstrap";
class Durak extends Component {
  state = {
    showStartGameScreen: false,
    playerName: null,
    players: null
  };
  // .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  startGame = () => {};
  // getPlayers = (playerName, players) => {
  //   return playerName;
  // };
  showStartScreen = () => {
    const { showStartGameScreen } = this.state;
    this.setState({ showStartGameScreen: !showStartGameScreen });
  };

  render() {
    const { showStartGameScreen, playerName } = this.state;

    return (
      <>
        <div className="durak-container">
          {!showStartGameScreen && (
            <ButtonToolbar>
              <Button
                variant="primary"
                className="start-game-durak"
                onClick={() => this.showStartScreen()}
              >
                Start Game
              </Button>
            </ButtonToolbar>
          )}
          <DurakStartScreen
            show={showStartGameScreen}
            onHide={() => this.showStartScreen()}
          />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Durak;
