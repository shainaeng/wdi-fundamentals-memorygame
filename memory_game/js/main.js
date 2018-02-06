var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
      alert("Sorry, try again.");
    }
// This is the GA-provided code for the above lines (but it logs a message after each flip):
    //if (cardsInPlay[0] === cardsInPlay[1]) {
      //console.log("You found a match!");
    //} else {
      //console.log("Sorry, try again.");
    //}
};

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);


checkForMatch();
};

flipCard(0);
flipCard(2);
