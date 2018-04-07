var Letter = require("./Letter.js");

var Word = function (word) {
    this.word = word;
    // An array of`new` Letter objects representing the letters of the underlying word
    this.wordArr = this.word.split("").map(function (character) {
        return new Letter(character)
    });
}

// A function that returns a string representing the word.This should call the function on each letter object(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
Word.prototype.addLetter = function (character) {
    this.wordArr.push(new Letter(character));
}
Word.prototype.displayWord = function () {
    return this.wordArr.join(" ");
}

// A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in `Letter.js`)
Word.prototype.guessLetter = function (userGuess) {
    var isCorrect = false;
    for (var i = 0; i < this.wordArr.length; i++) {
        if (this.wordArr[i].checkUserGuess(userGuess)) {
            isCorrect = true;


        }
    }
    return isCorrect

}

module.exports = Word;