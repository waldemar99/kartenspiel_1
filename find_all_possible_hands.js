// // //

// // function Game() {
// //   this.card = [];
// //   {
// //     let x = 1;
// //     while (this.card.length < 52) {
// //       this.card.push(x);
// //       x++;
// //     }
// //   }
// //   const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// //   const secArray = ["a", "b", "c", "d"];

// //   this.deck = [];

// //   secArray.forEach((sitem) => {
// //     firstArray.forEach((fitem) => {
// //       this.deck.push(fitem + sitem);
// //     });
// //   });

// //   this.deal = (num) => {
// //     const cards = [];
// //     while (num) {
// //       const x = Math.floor(Math.random() * this.deck.length);
// //       cards.push(this.deck[x]);
// //       this.deck.splice(x, 1);
// //       num--;
// //     }
// //     return cards;
// //   };
// // }

// // let myGame = new Game();

// // let game = 4;
// // let heroHoleCards = myGame.deal(game);
// // let player1 = myGame.deal(game);
// // let player2 = myGame.deal(game);
// // let player3 = myGame.deal(game);
// // let player4 = myGame.deal(game);
// // let player5 = myGame.deal(game);

// // let flop = myGame.deal(3);
// // let turn = myGame.deal(1);
// // let river = myGame.deal(1);

// // console.log("hero", heroHoleCards);
// // console.log("P1", player1);
// // console.log("P2", player2);
// // console.log("P3", player3);
// // console.log("P4", player4);
// // console.log("P5", player5);

// // console.log("flop ", flop);
// // console.log("turn ", turn);
// // console.log("river ", river);

// // console.log("restkarten", myGame.deck);
// // console.log("anzahl ", myGame.deck.length);

// // let stop = true;
// // let count = 1;
// // // let myHandMeth = myGame.deal.bind(Game);

// // let myHand;
// // // do {
// // let mySecGame = new Game();
// // myHand = mySecGame.deal(5);
// // //   // console.log("myHand", myHand);
// // //   if (
// // //     myHand[0] === "1a" ||
// // //     (myHand[1] === 2 && myHand[2] === 3 && myHand[3] === 4 && myHand[4] === 5)
// // //   ) {
// // //     stop = false;
// // //   }
// // //   // console.log("", myHand);
// // //   count++;
// // //   // myGame.deal(3);
// // // } while (stop);

// // console.log("myHand", myHand);
// // console.log("count", count);

// // let combos = [];
// // let myHand7 = [];
// // let innerForLoopRestkarten = myGame.deck;
// // let outerForLoopRestkarten = myGame.deck;
// // console.log("", outerForLoopRestkarten);

// // for (let i = 0; i < outerForLoopRestkarten.length; i++) {
// //   turn = outerForLoopRestkarten[0];
// //   // console.log("turn", turn);

// //   for (let j = 1; j < innerForLoopRestkarten.length; j++) {
// //     // console.log("", innerForLoopRestkarten);
// //     river = innerForLoopRestkarten[1];
// //     // console.log("river", river);

// //     myHand7 = myHand.concat("TURN", turn, "RIVER", river);

// //     combos.push(myHand7);
// //     // console.log("turn1", myGame.deck.splice(0, 1));
// //     innerForLoopRestkarten.splice(0, 1);
// //   }
// //   outerForLoopRestkarten.splice(0, 0);
// // }
// // // console.log("com", combos);
// // console.log("com.len", combos.length);

// function Game() {
//   this.card = [];
//   {
//     let x = 1;
//     while (this.card.length < 52) {
//       this.card.push(x);
//       x++;
//     }
//   }
//   const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//   const secArray = ["a", "b", "c", "d"];

//   this.deck = [];

//   secArray.forEach((sitem) => {
//     firstArray.forEach((fitem) => {
//       this.deck.push(fitem + sitem);
//     });
//   });

//   this.deal = (num) => {
//     const cards = [];
//     while (num) {
//       const x = Math.floor(Math.random() * this.deck.length);
//       cards.push(this.deck[x]);
//       this.deck.splice(x, 1);
//       num--;
//     }
//     return cards;
//   };
// }

// let myGame = new Game();

// let game = 4;
// let heroHoleCards = myGame.deal(game);
// // let player1 = myGame.deal(game);
// // let player2 = myGame.deal(game);
// // let player3 = myGame.deal(game);
// // let player4 = myGame.deal(game);
// // let player5 = myGame.deal(game);

// let flop = myGame.deal(3);
// // let turn = myGame.deal(1);
// // let river = myGame.deal(1);

// console.log("hero", heroHoleCards);
// // console.log("P1", player1);
// // console.log("P2", player2);
// // console.log("P3", player3);
// // console.log("P4", player4);
// // console.log("P5", player5);

// console.log("flop ", flop);
// // console.log("turn ", turn);
// // console.log("river ", river);

// console.log("restkarten", myGame.deck);
// console.log("anzahl ", myGame.deck.length);

// let stop = true;
// let count = 1;

// let myHand;
// let mySecGame = new Game();
// myHand = mySecGame.deal(5);

// console.log("myHand", myHand);
// console.log("count", count);

// let combos = [];
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

let array1 = [10, 20, 30, 30, 40, 50, 60];
let array2 = "jkhkjhfhgdsjhg";
let obj = { age: 20, myage: 52 };

let result = array1.filter((item) => !array2.includes(item));
console.log(result);
let myset = new Set(array2);
let myset1 = new Set(array1);
console.log("", myset);
console.log("", myset1);
