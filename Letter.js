// constructor function for creating Word objects
var Letter = function (character) {
    // A string value to store the underlying character for the letter
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet
    this.alreadyGuessed = false;

}
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Letter.prototype.checkUserGuess = function (userGuess) {
    if (this.character.toUpperCase() === userGuess.toUpperCase()) {
        this.alreadyGuessed = true;
        return true;
    } else {
        return false;

    }
}
// A function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
Letter.prototype.toString = function () {
    if (this.alreadyGuessed === true) {
        return this.character;
    } else {
        return "_";
    }
}

module.exports = Letter;