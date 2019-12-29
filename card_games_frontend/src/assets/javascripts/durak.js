class CardDeck {
  constructor(cards) {
    this.cards = cards;
  }
  size() {
    return this.cards.length;
  }
  shuffle() {
    let cards = this.cards;
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  draw(amount) {
    let cards = this.cards;
    return cards.splice(0, amount);
  }
}

function buildCards() {
  const suit = ["SPADES", "CLUBS", "HEARTS", "DIAMONDS"];
  const rank = ["6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
  let deck = [];
  for (let i = 0; i <= suit.length - 1; i++) {
    for (let j = 0; j <= rank.length - 1; j++) {
      let cleanRank = rank[j].charAt(0);
      let cleanSuit = suit[i].charAt(0);
      if (rank[j] === "10") {
        cleanRank = "0";
      }
      let image = `https://deckofcardsapi.com/static/img/${cleanRank}${cleanSuit}.png`;

      deck.push({ suit: suit[i], rank: rank[j], image });
    }
  }
  function shuffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }
  return shuffle(deck);
}
var cards = new CardDeck(buildCards());

export default cards;
