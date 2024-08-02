import deck from "./deck.js";
import { imgIdOmaha, imgIdTexas } from "./tischLayout.js";

let localDeck = Array.from(deck);
let reducedLocalDeck = [];
let board = [];
let flop = [];
let turn = [];
let river = [];
let holeCards = [];

// let anzahl = 0;

export function neuesBoard() {
  let i = 5;
  board = [];
  flop = [];

  reducedLocalDeck = Array.from(deck);

  if (holeCards.length) {
    reducedLocalDeck = reducedLocalDeck.filter(
      (item) => !holeCards.includes(item)
    );
  }

  if (turn.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !turn.includes(item));
  }

  if (river.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !river.includes(item));
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    board.push(reducedLocalDeck[zz]);
    reducedLocalDeck.splice(zz, 1);
  }

  console.log("", reducedLocalDeck.length);
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  // reducedLocalDeck = reducedLocalDeck.concat(board);

  return board;
}

export function neuerFlop() {
  let i = 3;
  flop = [];
  board = [];
  reducedLocalDeck = Array.from(deck);

  if (holeCards.length) {
    reducedLocalDeck = reducedLocalDeck.filter(
      (item) => !holeCards.includes(item)
    );
  }

  if (turn.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !turn.includes(item));
  }

  if (river.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !river.includes(item));
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    flop.push(reducedLocalDeck[zz]);
    reducedLocalDeck.splice(zz, 1);
  }

  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  reducedLocalDeck = reducedLocalDeck.concat(flop);
  return flop;
}

export function neuerTurn() {
  let i = 1;
  turn = [];

  reducedLocalDeck = Array.from(deck);

  if (holeCards.length) {
    reducedLocalDeck = reducedLocalDeck.filter(
      (item) => !holeCards.includes(item)
    );
  }

  if (board.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !board.includes(item));
  }

  if (flop.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !flop.includes(item));
  }

  if (river.length && !board.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !river.includes(item));
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    turn.push(reducedLocalDeck[zz]);
    // reducedLocalDeck.splice(zz, 1);
  }

  checkIfCardsAreAvailable();
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  return turn;
}

export function neuerRiver() {
  let i = 1;
  river = [];

  reducedLocalDeck = Array.from(deck);

  if (holeCards.length) {
    reducedLocalDeck = reducedLocalDeck.filter(
      (item) => !holeCards.includes(item)
    );
  }

  if (board.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !board.includes(item));
  }

  if (flop.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !flop.includes(item));
  }

  if (turn.length && !board.length) {
    reducedLocalDeck = reducedLocalDeck.filter((item) => !turn.includes(item));
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    river.push(reducedLocalDeck[zz]);
    // reducedLocalDeck.splice(zz, 1);
  }

  checkIfCardsAreAvailable();
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  return river;
}

export function createHoleCards(anzahlSpieler, statusSpielVariante) {
  console.log("red", reducedLocalDeck.length);
  holeCards = [];

  if (statusSpielVariante === "") {
    alert("Bitte Spiel Texas oder Omaha wählen");
    return;
  }

  if (reducedLocalDeck.length === 0) {
    reducedLocalDeck = localDeck;
  }

  // console.log("reducedLocalDeck", reducedLocalDeck);

  // console.log("localDeck", localDeck);

  let anzahlKartenFuerSpielvariante;

  statusSpielVariante === "o"
    ? (anzahlKartenFuerSpielvariante = 4)
    : (anzahlKartenFuerSpielvariante = 2);

  let anzahlHoleCards = anzahlSpieler * anzahlKartenFuerSpielvariante;

  while (anzahlHoleCards--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    holeCards.push(reducedLocalDeck[zz]);
    reducedLocalDeck.splice(zz, 1);
  }

  console.log("red", reducedLocalDeck.length);
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;
  console.log("red", reducedLocalDeck.length);

  reducedLocalDeck = reducedLocalDeck.concat(holeCards);
  console.log("red", reducedLocalDeck.length);

  console.log("holeCards", holeCards);

  if (statusSpielVariante === "o") {
    anzahlHoleCards = 0;

    imgIdOmaha.forEach((element) => {
      let img = document.getElementById(element);
      img.src = `./cards/${holeCards[anzahlHoleCards]}.png`;
      anzahlHoleCards++;
    });
  } else {
    anzahlHoleCards = 0;
    imgIdTexas.forEach((element) => {
      let img = document.getElementById(element);
      console.log("", img);
      img.src = `./cards/${holeCards[anzahlHoleCards]}.png`;
      anzahlHoleCards++;
    });
  }

  checkIfCardsAreAvailable();

  return holeCards;
}

function checkIfCardsAreAvailable() {
  if (deck.length === 0) {
    addEventListener("click", () => {
      location.reload();
    });
  }
  return;
}

export { reducedLocalDeck, localDeck };
