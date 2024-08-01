import { neuesBoard } from "./kartenDealen.js";

export function findBoard() {
  let anzahl = 0;

  let searchBoard = neuesBoard();

  while (
    !(
      searchBoard[0] === "karoa" &&
      searchBoard[1] === "karok" &&
      searchBoard[2] === "karod"
    )
  ) {
    searchBoard = neuesBoard();
    anzahl++;
  }
  console.log("", anzahl);
  console.log("", searchBoard);
}

window.aasuchen = findBoard;
