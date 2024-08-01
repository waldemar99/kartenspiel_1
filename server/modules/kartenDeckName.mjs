let myGame;

export default class KartenGameName {
  constructor() {
    this.karten = [
      ["a", "k", "d", "b", 10, 9, 8, 7, 6, 5, 4, 3, 2],
      ["herz", "karo", "pik", "kreuz"],
    ];

    this.kartenGame = [];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        const karte = this.karten[1][i] + this.karten[0][j];
        this.kartenGame.push(karte);
      }
    }
  }

  karteZiehen(anzahlKarten) {
    const karten = [];

    if (this.kartenGame.length <= 0) {
      console.log("no more cards");
    }

    for (let i = 1; i <= anzahlKarten; i++) {
      const x = Math.floor(Math.random() * this.kartenGame.length);
      const karte = this.kartenGame[x];

      karten.push(karte);
      this.kartenGame.splice(x, 1);
    }
    console.log("", karten);
    return karten;
  }
}

myGame = new KartenGameName();

function dealen(anZahlSpieler, spiel) {
  let karten = 0;
  spiel === "t" ? (karten = 2) : (karten = 4);

  while (anZahlSpieler) {
    myGame.karteZiehen(karten);
    anZahlSpieler--;
  }
  return "Done";
}

let runden = 1;
while (runden) {
  runden--;
  console.log("#", dealen(9, ""));
}

console.log(
  "",

  myGame.kartenGame.length
);
