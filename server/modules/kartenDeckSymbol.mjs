let myGame;

export default class KartenGameSymbol {
  constructor() {
    this.karten = [
      ["♥", "♦", "♠", "♣"],
      ["a", "k", "d", "b", 10, 9, 8, 7, 6, 5, 4, 3, 2],
    ];
    this.kartenGameSortiertSymbol = this.sortiertSymbol();
  }

  sortiertSymbol() {
    // to Display a more readable version in the console
    let kartenGameSortiertSymbol = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        const karte = this.karten[1][j] + "" + this.karten[0][i];
        kartenGameSortiertSymbol.push(karte);
      }
    }
    return kartenGameSortiertSymbol;
  }

  karteZiehen(anzahlKarten) {
    const karten = [];

    // console.log("", this.kartenGameSortiertSymbol);

    if (this.kartenGameSortiertSymbol.length <= 0) {
      return "no more cards";
    }

    for (let i = 1; i <= anzahlKarten; i++) {
      let x = Math.floor(Math.random() * this.kartenGameSortiertSymbol.length);
      // x = 20;
      const karte = this.kartenGameSortiertSymbol[x];

      karten.push(karte);
      this.kartenGameSortiertSymbol.splice(x, 1);
    }

    return karten;
  }
}

function dealen(spiel) {
  let kartenZuGeben;
  spiel === "t" ? (kartenZuGeben = 2) : (kartenZuGeben = 4);

  return myGame.karteZiehen(kartenZuGeben);
}

let geDealteHaende = [];
let kartenInDieserRunde;

let gewuenschteKarten = 1;
while (gewuenschteKarten) {
  myGame = new KartenGameSymbol();
  kartenInDieserRunde = dealen("t");
  console.log("#", kartenInDieserRunde);
  // console.log("#Restkarten", myGame.kartenGameSortiertSymbol.length);
  geDealteHaende.push(kartenInDieserRunde);
  // console.log("---", geDealteHaende);
  ++gewuenschteKarten;
  if (geDealteHaende.length > 1) {
    gewuenschteKarten = findeGleicheHaende(gewuenschteKarten);
  }

  if (gewuenschteKarten === 15000) {
    console.log("", geDealteHaende.length);
    gewuenschteKarten = 0;
  }
}

function findeGleicheHaende(i) {
  let vergleichGleicheKarten =
    (geDealteHaende[0][0] === geDealteHaende[i - 2][0] &&
      geDealteHaende[0][1] === geDealteHaende[i - 2][1]) ||
    (geDealteHaende[0][0] === geDealteHaende[i - 2][1] &&
      geDealteHaende[0][1] === geDealteHaende[i - 2][0]);

  let a1 = geDealteHaende[i - 2][0][0] === "a";
  let a2 = geDealteHaende[i - 2][1][0] === "a";
  let k1 = geDealteHaende[i - 2][0][0] === "k";
  let k2 = geDealteHaende[i - 2][1][0] === "k";
  let d1 = geDealteHaende[i - 2][0][0] === "d";
  let d2 = geDealteHaende[i - 2][1][0] === "d";
  let b1 = geDealteHaende[i - 2][0][0] === "b";
  let b2 = geDealteHaende[i - 2][1][0] === "b";

  let variante1 = a1 && a2;
  let variante2 = (a1 && a2) || (k1 && k2);
  let variante3 = (a1 && a2) || (k1 && k2) || (d1 && d2);
  let variante4 = (a1 && a2) || (k1 && k2) || (d1 && d2) || (b1 && b2);
  let variante5 = (a1 && k1) || (a1 && k2) || (a2 && k1) || (a2 && k2);

  do {
    if (variante5) {
      console.log("anzahl runden", i);
      console.log("", geDealteHaende[geDealteHaende.length - 1]);
      return false;
    } else {
      return i;
    }
  } while (geDealteHaende.length - 30);
}
