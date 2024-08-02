import {
  neuesBoard,
  neuerTurn,
  neuerRiver,
  neuerFlop,
  createHoleCards,
} from "./kartenDealen.js";

import { alleKartenDarstellen } from "./alleKartenDarstellen.js";

import tischLayout from "./tischLayout.js";

import { findBoard } from "./findBoard.js";

let board = [];
let turn = [];
let river = [];
let flop = [];
let aktuelleSpielVariante = "";

let imgFlop0 = document.getElementsByClassName("flop")[0];
let imgFlop1 = document.getElementsByClassName("flop")[1];
let imgFlop2 = document.getElementsByClassName("flop")[2];
let imgTurn = document.getElementById("turn");
let imgRiver = document.getElementById("river");

document.getElementById("btn-neuesBoard").addEventListener("click", () => {
  board = neuesBoard();
  imgFlop0.src = `./cards/${board[0]}.png`;
  imgFlop1.src = `./cards/${board[1]}.png`;
  imgFlop2.src = `./cards/${board[2]}.png`;
  imgTurn.src = `./cards/${board[3]}.png`;
  imgRiver.src = `./cards/${board[4]}.png`;
});

document.getElementById("btn-neuerFlop").addEventListener("click", () => {
  flop = neuerFlop();
  console.log(flop);
  imgFlop0.src = `./cards/${flop[0]}.png`;
  imgFlop1.src = `./cards/${flop[1]}.png`;
  imgFlop2.src = `./cards/${flop[2]}.png`;
  imgTurn.src = `./cards/blank.png`;
  imgRiver.src = `./cards/blank.png`;
});

document.getElementById("btn-turn").addEventListener("click", () => {
  turn = neuerTurn();
  console.log(turn);
  imgTurn.src = `./cards/${turn}.png`;
});

document.getElementById("btn-river").addEventListener("click", () => {
  river = neuerRiver();
  imgRiver.src = `./cards/${river}.png`;
});

document.getElementById("btn-holeCards").addEventListener("click", () => {
  createHoleCards(
    Number(document.getElementById("countPlayers").value),
    aktuelleSpielVariante
  );
});

window.tischLayout = tischLayout;

alleKartenDarstellen();

function setToOmaha() {
  aktuelleSpielVariante = "o";
  console.log("", "o");
}

function setToTexas() {
  aktuelleSpielVariante = "t";
  console.log("", "t");
}

document.getElementById("texas").addEventListener("click", setToTexas);
document.getElementById("omaha").addEventListener("click", setToOmaha);

document.addEventListener("dblclick", (e) => {
  e.target.src = "./cards/blank.png";
});
