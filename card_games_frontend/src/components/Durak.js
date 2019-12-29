import React, { Component } from "react";
import axios from "axios";
import "../assets/stylesheets/durak.css";
import DurakStartScreen from "./DurakStartScreen";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
import Api from "../assets/api/api";
import DrawFromInternalDeck from "../assets/javascripts/durak";
import DurakHand from "./DurakHand";
class Durak extends Component {
  state = {
    showStartGameScreen: false,
    playerName: null,
    gameId: "",
    deckId: "",
    players: 0,
    score: 0,
    progress: "in-progress",
    seatClass1: "player1 seat empty",
    seatClass2: "player2 seat empty",
    seatClass3: "player3 seat empty",
    seatClass4: "player4 seat empty",
    seatCards1: [],
    seatCards2: [],
    seatCards3: [],
    seatCards4: [],
    cardsDealt: false,
    wildCardImage: null,
    drawnCard: []
  };
  startGame = () => {
    this.shuffleCards();
  };

  shuffleCards = () => {
    DrawFromInternalDeck.shuffle();
  };

  dealCards = (cardAmount, player) => {
    const { cardsDealt } = this.state;
    const cards = DrawFromInternalDeck.draw(cardAmount);
    this.setState({
      [`seatCards${player}`]: cards
    });
    this.setState({ cardsDealt: !cardsDealt });
  };

  drawWildCard = () => {
    let card = DrawFromInternalDeck.draw(1);
    let image = card[0].image;
    this.setState({ wildCardImage: image });
  };
  checkPlayers = () => {
    let { gameId, players } = this.state;
    players = Number(players);

    switch (players) {
      case 1:
        // run dealCards fn(6, 1)
        this.dealCards(6, 1);
        this.drawWildCard();

        this.setState({ seatClass1: "player1 seat taken" });
        break;
      case 2:
        this.dealCards(6, 1);
        this.dealCards(6, 2);
        this.drawWildCard();

        this.setState({
          seatClass1: "player1 seat taken",
          seatClass2: "player2 seat taken"
        });
        break;
      case 3:
        this.dealCards(6, 1);
        this.dealCards(6, 2);
        this.dealCards(6, 3);
        this.drawWildCard();

        this.setState({
          seatClass1: "player1 seat taken",
          seatClass2: "player2 seat taken",
          seatClass3: "player3 seat taken"
        });
        break;
      case 4:
        this.dealCards(6, 1);
        this.dealCards(6, 2);
        this.dealCards(6, 3);
        this.dealCards(6, 4);
        this.drawWildCard();

        this.setState({
          seatClass1: "player1 seat taken",
          seatClass2: "player2 seat taken",
          seatClass3: "player3 seat taken",
          seatClass4: "player4 seat taken"
        });
        break;

      default:
        this.setState({ seatClass2: "player2 seat taken" });
    }
  };

  showStartScreen = () => {
    const { showStartGameScreen } = this.state;
    this.setState({ showStartGameScreen: !showStartGameScreen });
    this.checkPlayers();
  };
  handleDropdown = event => {
    this.setState({ players: event.target.value });
  };
  handleSubmit = () => {
    const { players, score, progress } = this.state;
    const { id, token } = localStorage;

    const data = {
      user: id,
      player_amount: players,
      score: score,
      progress
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };

    Api.post("games/", data, headers).then(res => {
      this.setState({ gameId: res.data.id });
      this.checkPlayers();
    });
    this.showStartScreen();
  };
  componentDidMount() {
    this.startGame();
  }
  render() {
    const {
      showStartGameScreen,
      playerName,
      players,
      seatClass1,
      seatClass2,
      seatClass3,
      seatClass4,
      seatCards2,
      cardsDealt,
      wildCardImage
    } = this.state;

    const playerHand = seatCards2.map((card, i) => {
      return <DurakHand key={i} id={i} {...card} />;
    });
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
          {/* <DurakStartScreen
            players={players}
            show={showStartGameScreen}
            onHide={() => this.showStartScreen()}
          /> */}
          <Modal
            onHide={() => this.showStartScreen()}
            show={showStartGameScreen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Players</Form.Label>
                  <Form.Control as="select" onChange={this.handleDropdown}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button onClick={props.onHide} className="primary"> */}
              <Button onClick={() => this.handleSubmit()} className="primary">
                Go
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="game-table">
            <div className="outer-table">
              <div className="center-table">
                <div className="card-grid">
                  <div className={seatClass1}></div>
                  <div className={seatClass2}>{seatCards2 && playerHand}</div>
                  <div className={seatClass3}></div>
                  {cardsDealt && (
                    <div className="pile taken" onClick={() => this.drawCard()}>
                      <img
                        src={wildCardImage}
                        className="wildcard"
                        alt="wildcard"
                      />
                    </div>
                  )}

                  <div className={seatClass4}></div>
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
