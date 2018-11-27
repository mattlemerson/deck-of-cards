class Deck {
  // construct new deck of cards that is already shuffled - constructor
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  // create an ordered deck of cards - method
  reset() {
    this.deck = [];

    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  // Fisher-Yates shuffle - method
  shuffle() {
    const deck = this.deck;
    let m = deck.length;
    let i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }

  // card dealing - method
  deal() {
    return this.deck.pop();
  }
}
