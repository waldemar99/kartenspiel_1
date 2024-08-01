function Game() {
  const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const secArray = ["a", "b", "c", "d"];

  this.deck = [];

  secArray.forEach((sitem) => {
    firstArray.forEach((fitem) => {
      this.deck.push(fitem + sitem);
    });
  });

  this.deal = (num) => {
    const cards = [];
    while (num) {
      const x = Math.floor(Math.random() * this.deck.length);
      cards.push(this.deck[x]);
      this.deck.splice(x, 1);
      num--;
    }
    return cards;
  };

  this.hand = this.deal(5);
  this.cards = this.hand; // Initialize this.cards with the dealt hand

  this.findAllPossibleHandWithFolpAndRiver = (hand = []) => {
    let allPossibleHandWithFolpAndRiver;

    if (hand.length === 5) {
      allPossibleHandWithFolpAndRiver = [hand];
      let remainingDeck = this.deck.filter((item) => !hand.includes(item));
      //let result = array1.filter(item => !array2.includes(item));

      // Loop through all possible turn and river cards
      for (let i = 0; i < remainingDeck.length; i++) {
        let turn = remainingDeck[i];

        for (let j = i + 1; j < remainingDeck.length; j++) {
          let river = remainingDeck[j];

          let newHand = hand.concat(turn, river);
          allPossibleHandWithFolpAndRiver.push(newHand);
        }
      }
    } else {
      allPossibleHandWithFolpAndRiver = [this.hand];
      let remainingDeck = this.deck.filter((item) => !hand.includes(item));
      //let result = array1.filter(item => !array2.includes(item));

      // Loop through all possible turn and river cards
      for (let i = 0; i < remainingDeck.length; i++) {
        let turn = remainingDeck[i];

        for (let j = i + 1; j < remainingDeck.length; j++) {
          let river = remainingDeck[j];

          let newHand = this.hand.concat(turn, river);
          allPossibleHandWithFolpAndRiver.push(newHand);
        }
      }
    }

    return allPossibleHandWithFolpAndRiver;
  };
}

let myGame = new Game();
let allHands = myGame.findAllPossibleHandWithFolpAndRiver();
let allHands1 = myGame.findAllPossibleHandWithFolpAndRiver([
  "1a",
  "2a",
  "3a",
  "4a",
  "5a",
]);
console.log("#", allHands);
// console.log("###", allHands1);
let allHands2 = myGame.findAllPossibleHandWithFolpAndRiver([
  "2a",
  "3a",
  "4a",
  "5a",
  "6a",
]);
console.log("", allHands2);
