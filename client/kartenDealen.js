import deck from "./deck.js";
import { imgIdOmaha, imgIdTexas } from "./tischLayout.js";

let localDeck = Array.from(deck);
let reducedLocalDeck = [];
let anzahl = 0;
let holeCards = [];

export function neuesBoard() {
  let board = [];
  let i = 5;

  // console.log("", localDeck);

  while (i--) {
    let zz = Math.floor(Math.random() * localDeck.length);
    board.push(localDeck[zz]);
    localDeck.splice(zz, 1);
  }

  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${localDeck.length}`;
  reducedLocalDeck = localDeck;

  localDeck = Array.from(deck);

  return board;
}

export function neuerFlop() {
  let flop = [];
  let i = 3;

  while (i--) {
    let zz = Math.floor(Math.random() * localDeck.length);
    flop.push(localDeck[zz]);
    localDeck.splice(zz, 1);
  }

  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${localDeck.length}`;
  reducedLocalDeck = localDeck;

  localDeck = Array.from(deck);
  return flop;
}

export function neuerTurn() {
  let turn = [];
  let i = 1;

  if (reducedLocalDeck.length === 0) {
    reducedLocalDeck = localDeck;
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    turn.push(localDeck[zz]);
    reducedLocalDeck.splice(zz, 1);
  }
  checkIfCardsAreAvailable();
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  return turn;
}

export function neuerRiver() {
  let river = [];
  let i = 1;

  if (reducedLocalDeck.length === 0) {
    reducedLocalDeck = localDeck;
  }

  while (i--) {
    let zz = Math.floor(Math.random() * reducedLocalDeck.length);
    river.push(reducedLocalDeck[zz]);
    reducedLocalDeck.splice(zz, 1);
  }

  checkIfCardsAreAvailable();
  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  return river;
}

export function createHoleCards(anzahlSpieler, statusSpielVariante) {
  if (statusSpielVariante === "") {
    alert("Bitte Spiel Texas oder Omaha wählen");
    return;
  }

  if (reducedLocalDeck.length === 0) {
    reducedLocalDeck = localDeck;
  }

  // console.log("reducedLocalDeck", reducedLocalDeck);

  console.log("localDeck", localDeck);

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

  document.getElementById(
    "restKarten"
  ).innerHTML = `Restkarten ${reducedLocalDeck.length}`;

  reducedLocalDeck = reducedLocalDeck.concat(holeCards);

  console.log("holeCards", holeCards);

  if (statusSpielVariante === "o") {
    anzahlHoleCards = 0;

    imgIdOmaha.forEach((element) => {
      let img = document.getElementById(element);
      console.log("", img);
      img.src = `../cards/${holeCards[anzahlHoleCards]}.png`;
      anzahlHoleCards++;
    });
  } else {
    anzahlHoleCards = 0;
    imgIdTexas.forEach((element) => {
      let img = document.getElementById(element);
      console.log("", img);
      img.src = `../cards/${holeCards[anzahlHoleCards]}.png`;
      anzahlHoleCards++;
    });
  }

  holeCards = [];

  checkIfCardsAreAvailable();

  return;
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
