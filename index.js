var Word = require("./Word.js")
var inquirer = require('inquirer');


var wordsArray = [new Word("mop"), new Word("bottle"), new Word("friend")]
words = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var uniqueArray = [];
var guessesRemaining = 10;
var correct = 0;
var incorrect = 0;

// sets up new random word
function newWord() {
    // reset guessesRemaining
    guessesRemaining = 10;
    // pick a random word from wordsArray
    words = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    console.log(words.displayWord());
    // adds new word to array of words already used
    uniqueArray.push(words)


    guessAgain();
}
// this function takes userGuesses and checks to see if they are in the word
function guessAgain() {
    var self = this;
    inquirer.prompt([{
            type: "input",
            message: "Pick a letter",
            name: "userGuess"
        }])

        .then(function (response) {
            guessesRemaining--;

            words.guessLetter(response.userGuess);
            console.log(words.displayWord());

            if (guessesRemaining > 0 && words.wordArr.join(" ").indexOf("_") != -1) {
                guessAgain();
            } else if (guessesRemaining > 0 && words.wordArr.join(" ").indexOf("_") === -1) {
                correct++
                console.log("\nYou go it!");
                newWord();
            } else if (guessesRemaining = 0) {
                incorrect++;
                console.log("\noops, out of guesses");
            }

            console.log("\nWins: " + correct);
            console.log("\nLosses: " + incorrect);

        });
}

function playAgain() {
    inquirer.prompt([{
            type: "confirm",
            message: "Would you like to play again?",
            name: "playAgain",
            default: false
        }])

        .then(function (response) {
            if (response.confirm = true) {
                var uniqueArray = [];
                var guessesRemaining = 10;
                var correct = 0;
                var incorrect = 0;
                newWord();
            } else {
                console.log("Thanks for playing! \nHave a nice day!")
            }


        });

}

newWord();




// console.log(duck.displayWord());

// word.guessLetter("o");

// duck.guessLetter("u");

// console.log(duck.displayWord());