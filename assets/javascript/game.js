//NOTE: Game is not functioning. Game2.js file is a separate attempt using patched code.

// Word array
var wordArray = ["heat", "cicadas", "hiking", "deck", "sunset", "grilling", "beer", "camping", "fireworks", "gardening", "baseball", "stargazing", "picnics", "smores", "flowers", "sunlight"];
    
//Variables
var wins = 0;
var lettersGuessed = [];
var guessesLeft = [];

//Variables to display in HTML
var newWord = document.getElementById("currentword");
var guessedLetters = document.getElementById("userGuesses");
var guessesTogo = document.getElementById("guessesLeft");
var winsText = document.getElementById("gamewins");

//Player starts the game by entering a key. Computer randomly chooses word from word array.
document.onkeyup = function(event) {
    var userGuess = event.key;
    var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

//Word to guess will be displayed as ----- with '-' equal to the number of letters in the word.
for (var i = 0; i < wordArray[currentWord].length; i++) {
        currentWord.push("-");
    }   
//Player will enter a letter to guess the word.
//If a correct letter is entered, letter will be displayed in "current word"
//If and when the correct word is guessed, wins will increase by 1.

if (userGuess = currentWord) { 
    wins++;

//If a wrong letter is entered, letter will be captured in "letters guessed" and the guesses remaining  will decrease by 1.

} else if (userGuess != currentWord) {
    guessesLeft--;

}

if (guessesLeft=0) {
    alert("Sorry! You lost! Refresh the page to try again.");
}

newWord.textContent = currentWord;
guessedLetters.textContent = userGuess;
guessesTogo.textContent = guessesLeft;
winsText.textContent = wins;

}

