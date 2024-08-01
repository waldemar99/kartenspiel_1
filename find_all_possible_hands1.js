function Game() {
  this.card = [];
  {
    let x = 1;
    while (this.card.length < 52) {
      this.card.push(x);
      x++;
    }
  }
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

  this.findAllPossibleHandWithFolpAndRiver = () => {
    let allPossibleHandWithFolpAndRiver = [this.hand];
    // schleife mit allen turn cards
    for (i = 0; i < this.cards.length; i++) {
      let turn = this.cards[6 + i];
      let river = this.cards[7 + i];
      allPossibleHandWithFolpAndRiver.concat(turn, river);
    }

    return allPossibleHandWithFolpAndRiver;
  };
}

let myGame = new Game();
let allHands = myGame.findAllPossibleHandWithFolpAndRiver();
allHands.bind(Game);
console.log("###", allHands);

// // let outerForLoopRestkarten = [...myGame.deck]; // Copy of the remaining cards
// let outerForLoopRestkarten = myGame.deck; // Copy of the remaining cards

// for (let i = 0; i < outerForLoopRestkarten.length; i++) {
//   let turn = outerForLoopRestkarten[i];

//   let innerForLoopRestkarten = outerForLoopRestkarten.slice(i + 1); // Cards after the turn card

//   for (let j = 0; j < innerForLoopRestkarten.length; j++) {
//     let river = innerForLoopRestkarten[j];

//     let myHand7 = myHand.concat("TURN", turn, "RIVER", river);
//     combos.push(myHand7);
//   }
// }

// console.log("com", combos);
// console.log("com.len", combos.length);

// let outerForLoopRestkarten1 = myGame.deck; // Copy of the remaining cards
