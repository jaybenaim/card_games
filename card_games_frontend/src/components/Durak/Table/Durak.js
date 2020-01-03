import React, { Component } from "react";
import axios from "axios";
import "../../../assets/stylesheets/durak.css";
import DurakStartScreen from "./DurakStartScreen";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
import Api from "../../../assets/api/api";
import DrawFromInternalDeck from "../../../assets/javascripts/durak";
import getRankToNumber from "../../../assets/javascripts/getRankToNum";
import DurakHand from "./DurakHand";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DurakActivePile from "./DurakActivePile";
import Example from "../PlayZone/Example";
import DraggableBox from "../PlayZone/DraggableBox";

class Durak extends Component {
  // constructor(props) {
  //   super(props);
  //   this.playFirstCard = this.playFirstCard.bind(this);
  // }
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
    wildCard: null,
    drawnCard: [],
    activePileCards: [
      {
        spot1: { suit: "", rank: "", image: "" },
        spot2: { suit: "", rank: "", image: "" },
        spot3: { suit: "", rank: "", image: "" },
        spot4: { suit: "", rank: "", image: "" },
        spot5: { suit: "", rank: "", image: "" },
        spot6: { suit: "", rank: "", image: "" }
      }
    ]
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
  drawCard = amount => {
    return DrawFromInternalDeck.draw(amount);
  };
  drawWildCard = () => {
    let card = DrawFromInternalDeck.draw(1);

    this.setState({ wildCard: card[0] });
  };
  checkPlayers = () => {
    let { gameId, players } = this.state;
    players = Number(players);

    switch (players) {
      case 1:
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
          seatClass2: "player2 seat "
        });
        break;
      case 3:
        this.dealCards(6, 1);
        this.dealCards(6, 2);
        this.dealCards(6, 3);
        this.drawWildCard();
        this.setState({
          seatClass1: "player1 seat taken",
          seatClass2: "player2 seat ",
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
          seatClass2: "player2 seat ",
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
  checkCardAmount = () => {};

  playFirstCard = (cardPosition, player) => {
    //////// gget id from card "7H" created in durak.js

    const { seatCards2, wildCard, activePileCards } = this.state;
    const activeCard = seatCards2.splice(cardPosition, 1);
    const { suit, rank, image } = activeCard[0];
    let updatedCards = seatCards2;

    if (suit === wildCard.suit || rank === wildCard.rank) {
      // let rankNum = getRankToNumber(rank)
      // let wildNum = getRankToNumber(wildCard.rank); insert prev card check here
      // if (rankNum > prevRank)

      activePileCards[0][`spot1`].suit = suit;
      activePileCards[0][`spot1`].rank = rank;
      activePileCards[0][`spot1`].image = image;

      this.setState({
        activePileCards: activePileCards,
        seatCards2: updatedCards,
        activeCard
      });
      this.forceUpdate();
    } else {
      updatedCards.push(activeCard[0]);
      alert(
        "Cannot play that card. Must be a " +
          wildCard.suit +
          " or " +
          wildCard.rank
      );
    }
    this.setState({
      seatCards2: updatedCards,
      activeCard
    });

    this.forceUpdate();
  };

  componentDidMount() {
    this.startGame();
  }
  componentDidUpdate() {}

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
      wildCard,
      activePileCards,
      activeCard
    } = this.state;

    const playerHand = seatCards2.map((card, i) => {
      return (
        <DndProvider backend={Backend}>
          <DurakHand
            key={i}
            id={i}
            {...card}
            card={card}
            playFirstCard={this.playFirstCard}
            wildCard={wildCard}
          />
        </DndProvider>
      );
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
                  <div className={seatClass4}></div>
                  <div className="active-pile">
                    {cardsDealt && (
                      <DndProvider backend={Backend}>
                        <DurakActivePile
                          wildCard={wildCard}
                          activePileCards={activePileCards}
                          card={activeCard}
                        />
                        <Example
                          seatCards2={seatCards2}
                          activePileCards={activePileCards}
                          playFirstCard={this.playFirstCard}
                        />
                      </DndProvider>
                    )}
                  </div>
                  {cardsDealt && (
                    <div
                      className="pile taken"
                      onClick={() => this.drawCard(1)}
                    >
                      {wildCard && (
                        <img
                          src={wildCard.image}
                          className="wildcard"
                          alt="wildcard"
                        />
                      )}
                    </div>
                  )}
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
