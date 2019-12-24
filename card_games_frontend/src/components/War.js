import React, { Component } from "react";
import "../assets/stylesheets/war.css";
import cards from "../assets/javascripts/war.js";
import axios from "axios";
import { Button } from "react-bootstrap";
import Scoreboard from "./Scoreboard";
import WarBoard from "./WarBoard";

class War extends Component {
  state = {
    cardDeck: cards,
    draw: cards.draw(),
    color: "black",
    image1: null,
    image2: null,
    card1: null,
    card2: null,
    userScore: 0,
    p1Image4: null,
    p1Card4: null,
    p2Image4: null,
    p2Card4: null,
    computerScore: 0,
    isLoaded: false,
    rankedCardValue1: null,
    rankedCardValue2: null,
    warRankedCardValue1: null,
    warRankedCardValue2: null,
    initWar: false,
    showWar: false
  };

  getCards = () => {
    const { isLoaded } = this.state;
    cards.shuffle();

    this.setState({
      cardDeck: cards.shuffle(),
      isLoaded: !isLoaded
    });
    this.draw();
    this.getCardsFromApi();
    this.updateScore();
  };
  draw = () => {
    this.setState({
      draw: cards.draw()
    });
  };
  getCardsFromApi = () => {
    const { isLoaded } = this.state;
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => {
        const deckId = res.data.deck_id;

        setTimeout(() => {
          axios
            .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
            .then(res => {
              const card1 = res.data.cards[0];
              const card2 = res.data.cards[1];

              this.setState({
                image1: card1.image,
                image2: card2.image,
                card1,
                card2,
                deckId: deckId,
                isLoaded: !isLoaded
              });
            });
        }, 200);
        setTimeout(() => {
          this.updateScore();
        }, 800);
      });
    const { initWar } = this.state;
    if (initWar) {
      this.setState({ initWar: false });
    }
  };
  updateScore = (warCard1, warCard2) => {
    let { card1, card2 } = this.state;
    card1 = warCard1 || card1;
    card2 = warCard2 || card2;
    // remove after test  for war
    // card1.value = 7;
    // card2.value = 7;
    // end test

    if (card1 && card2) {
      const suitRankings = {
        ACE: 14,
        KING: 13,
        QUEEN: 12,
        JACK: 11,
        10: 10,
        9: 9,
        8: 8,
        7: 7,
        6: 6,
        5: 5,
        4: 4,
        3: 3,
        2: 2,
        1: 1
      };

      this.setState({
        rankedCardValue1: suitRankings[card1.value],
        rankedCardValue2: suitRankings[card2.value]
      });
    }

    setTimeout(() => {
      const { rankedCardValue1, rankedCardValue2 } = this.state;
      if (rankedCardValue1 > rankedCardValue2) {
        this.setState(prevState => {
          return {
            userScore: (prevState.userScore += 1)
          };
        });
      }
      if (rankedCardValue2 > rankedCardValue1) {
        this.setState(prevState => {
          return {
            computerScore: (prevState.computerScore += 1)
          };
        });
      }
      if (rankedCardValue1 === rankedCardValue2) {
        const { initWar } = this.state;
        this.setState({
          initWar: !initWar
        });
        this.runWar();
      }
    }, 100);
  };
  runWar = () => {
    this.getCardsForPlayer1();
    this.getCardsForPlayer2();
  };
  getCardsForPlayer1 = () => {
    const { isLoaded, deckId } = this.state;

    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
      .then(res => {
        const p1Card4 = res.data.cards[3];

        this.setState({
          p1Image4: p1Card4.image,
          p1Card4,
          deckId: deckId,
          isLoaded: !isLoaded
        });
      });
  };
  getCardsForPlayer2 = () => {
    const { isLoaded, deckId } = this.state;

    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`)
      .then(res => {
        const p2Card4 = res.data.cards[6];

        this.setState({
          p2Image4: p2Card4.image,
          p2Card4,
          deckId: deckId,
          isLoaded: !isLoaded
        });
      });
  };
  getCards = () => {
    this.getCardsFromApi();
  };
  componentDidMount() {
    this.getCardsFromApi();
  }
  componentDidUpdate() {}
  render() {
    const {
      image1,
      image2,
      card1,
      card2,
      isLoaded,
      userScore,
      computerScore,
      initWar,
      deckId,
      p1Image4,
      p1Card4,
      p2Image4,
      p2Card4
    } = this.state;

    return (
      <div className="card-container">
        <Scoreboard
          card1={card1}
          card2={card2}
          userScore={userScore}
          computerScore={computerScore}
          isLoaded={isLoaded}
        />
        <Button
          variant="outline-primary"
          className="get-card-btn"
          onClick={() => this.getCards()}
        >
          Get Card
        </Button>
        {initWar ? (
          <>
            <br />
            <strong> WAR </strong>
            <WarBoard
              deckId={deckId}
              card1Image={image1}
              card2Image={image2}
              card1={card1}
              card2={card2}
              p1Image4={p1Image4}
              p1Card4={p1Card4}
              p2Image4={p2Image4}
              p2Card4={p2Card4}
              userScore={userScore}
              computerScore={computerScore}
            />
          </>
        ) : (
          <>
            <div className="card-grid-container">
              <div className="card1 ">
                <img src={image1} alt={card1}></img>
              </div>
              <div className="card2 ">
                <img src={image2} alt={card2}></img>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default War;
