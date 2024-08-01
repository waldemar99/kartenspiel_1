let imgIdOmaha = [];
let imgIdTexas = [];

function tischLayout(spielVariante) {
  statusSpielVariante(spielVariante);

  let spieler = [
    "ply-btn",
    "ply-sb",
    "ply-bb",
    "ply-utg",
    "ply-utg1",
    "ply-mp1",
    "ply-mp2",
    "ply-hj",
    "ply-co",
  ];

  if (spielVariante === "omaha") {
    clearPlayerVariante();

    for (
      let anzahlSpieler = Number(document.getElementById("countPlayers").value);
      anzahlSpieler > 0;
      anzahlSpieler--
    ) {
      const newPlayerDiv = document.createElement("div");
      newPlayerDiv.id = `id-ply-${spieler[anzahlSpieler]}-auto`;
      newPlayerDiv.className = "cl-ply-auto";

      document.getElementById("id-ply").appendChild(newPlayerDiv);

      for (let i = 0; i < 4; i++) {
        const divWrapperElementCards = document.createElement("span");
        divWrapperElementCards.id = `id-span-wrapper-${spieler[anzahlSpieler]}-cards-${i}`;
        divWrapperElementCards.className = "cl-span-wrapper-cards";

        const img = new Image();
        img.src = "../cards/blank.png";
        img.id = `id-img-${spieler[anzahlSpieler]}-${i}`;
        imgIdOmaha.push(img.id);

        document
          .getElementById(`id-ply-${spieler[anzahlSpieler]}-auto`)
          .appendChild(divWrapperElementCards);

        document
          .getElementById(
            `id-span-wrapper-${spieler[anzahlSpieler]}-cards-${i}`
          )
          .appendChild(img);
      }
    }
    // console.log("", imgIdOmaha);
  } else {
    clearPlayerVariante();
    for (
      let anzahlSpieler = Number(document.getElementById("countPlayers").value);
      anzahlSpieler > 0;
      anzahlSpieler--
    ) {
      const newPlayerDiv = document.createElement("div");
      newPlayerDiv.id = `id-ply-${spieler[anzahlSpieler]}-auto`;
      newPlayerDiv.className = "cl-ply-auto";

      document.getElementById("id-ply").appendChild(newPlayerDiv);

      for (let i = 0; i < 2; i++) {
        const divWrapperElementCards = document.createElement("span");
        divWrapperElementCards.id = `id-span-wrapper-${spieler[anzahlSpieler]}-cards-${i}`;
        divWrapperElementCards.className = "cl-span-wrapper-cards";

        const img = new Image();
        img.src = "../cards/blank.png";
        img.id = `id-img-${spieler[anzahlSpieler]}-${i}`;
        imgIdTexas.push(img.id);

        document
          .getElementById(`id-ply-${spieler[anzahlSpieler]}-auto`)
          .appendChild(divWrapperElementCards);

        document
          .getElementById(
            `id-span-wrapper-${spieler[anzahlSpieler]}-cards-${i}`
          )
          .appendChild(img);
      }
    }
    console.log("", imgIdTexas);
  }
}

function clearPlayerVariante() {
  let parentElement = document.getElementById("id-ply");
  parentElement.innerHTML = "";
}

export function statusSpielVariante(spielVariante) {
  if (spielVariante === "omaha") {
    console.log("o");
    return "o";
  } else {
    console.log("t");
    return "t";
  }
}

export default tischLayout;

export { imgIdOmaha, imgIdTexas };
