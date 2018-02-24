var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];

var cardBack = "images/back.png";
var cardsInPlay = [];
var score = 0;

var checkForMatch = function () {
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
		score = score + 1;
		document.getElementById("score").textContent = score;
	resetCards();
    } else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
      alert("Sorry, try again.");
		resetCards();
    }
};

var flipCard = function () {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
// adding timeout so user can see second selected card before checking for a match
setTimeout(checkForMatch, 600);
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", cardBack);
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
};

createBoard();


var resetCards = function() {
  cardsInPlay = [];
  var gameBoardChildren = document.getElementById("game-board").childNodes;
  for (var i = 0; i < gameBoardChildren.length; i++){
    gameBoardChildren[i].setAttribute("src", cardBack);
  }
};