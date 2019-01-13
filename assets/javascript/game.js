// Word array
var words = ["heat", "cicadas", "hiking", "deck", "sunset", "grilling", "beer", "camping", "fireworks", "gardening", "baseball", "stargazing", "picnics", "smores", "flowers", "sunlight"];
    
//Variables
var wins = 0;
var lettersGuessed = [];
var guessesLeft = [];

//Variables to display in HTML
var newWord = document.getElementById("current-word");
var guessedLetters = document.getElementById("guesses-text");
var guessesTogo = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");

//Player starts the game by entering a key. Computer randomly chooses word from word array.
document.onkeyup = function(event) {
    var userGuess = event.key;
    var currentWord = words[Math.floor(Math.random() * words.length)];

//Word to guess will be displayed as ----- with '-' equal to the number of letters in the word.
for (var i = 0; i < words[currentWord].length; i++) {
        currentWord.push("_");
    }   
//Player will enter a letter to guess the word.
//If a correct letter is entered, letter will be displayed in "current word"
//If and when the correct word is guessed, wins will increase by 1.

if (userGuess = a letter contained in currentWord) { 
    wins++;

    //If a wrong letter is entered, letter will be captured in "letters guessed" and the guesses remaining  will decrease by 1.

} else if (userGuess) {
    guessesLeft--;
    //If the player runs out of guesses, an alert is displayed.
    //After the player loses, a new word is displayed.


}

newWord.textContent = currentWord;
guessedLetters.textContent = userGuess;
guessesTogo.textContent = guessesLeft;
winsText.textContent = wins;


}

