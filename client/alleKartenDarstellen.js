// alle Karten darstellen
// img dynamisch erzeugen

import deck from "./deck.js";

export function alleKartenDarstellen() {
  const alleKarten = document.getElementById("id-alle-karten"); // wrapper div

  for (let i = 0; i < 52; i++) {
    const cardWrapper = document.createElement("div"); // create a new div
    cardWrapper.classList.add("cl-alle-karten-img-wrapper"); // add class to the div
    alleKarten.appendChild(cardWrapper); // append the div to the wrapper

    const cardImage = new Image(); // create a new image
    cardImage.src = `./cards/${deck[i]}.png`; // set the image source
    cardImage.classList.add("cl-alle-karten-img"); // add class to the image
    cardImage.id = `id-alle-karten-img-${i}`;

    cardWrapper.appendChild(cardImage); // append the image to the card wrapper
  }
}
