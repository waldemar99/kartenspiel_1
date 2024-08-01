const secArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "b", "d", "k", "a"];
const firstArray = ["herz", "karo", "pik", "kreuz"];
let deck = [];

secArray.forEach((sitem) => {
  firstArray.forEach((fitem) => {
    deck.push(fitem + sitem);
  });
});

console.log("", deck.length);
// console.log("", deck);

export default deck;
