
var wordArray = ["heat", "cicadas", "hiking", "deck", "sunset", "grilling", "beer", "camping", "fireworks", "gardening", "baseball", "stargazing", "picnics", "smores", "flowers", "sunlight"];
var totalGuesses = 10;      // number of tries
var userGuesses = [];       // letters guessed
var computerPick;           // array number the machine choose randomly
var wordGuessed = [];       // This will be the word we actually build to match the current word
var guessesLeft = 0;        // How many tries the player has left
var wins = 0;               //wins
var losses = 0;             //losses

//Player starts the game by entering a key. Computer randomly chooses word from word array.
document.onkeyup = function(event) {
    var userGuesses = event.key;
    var computerPick = wordArray[Math.floor(Math.random() * wordArray.length)];

    function startgame () {
        
    }

    //build the word with blanks
    for (var i = 0; i < wordArray[computerPick].length; i++) {
        wordGuessed.push("-");
    } 

    guessesLeft = totalGuesses;

    var guessingWordText = "";
    for (var i = 0; i < wordGuessed.length; i++) {
        guessingWordText += wordGuessed[i];
    }

    //update guesses, word, and letters entered
    document.getElementById("gameWins").innerText = wins;
    document.getElementById("gameLosses").innerText = losses;
    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("userGuesses").innerText = userGuesses;

//compare letters entered to the character you're trying to guess
function evaluateGuess(letter) {
    var positions = [];

    for (var i = 0; i < wordArray[computerPick].length; i++) {
        if(wordArray[computerPick][i] === letter) {
            positions.push(i);
        }
    }

    if (positions.length <= 0) {
        guessesLeft--;
    } else {
        for(var i = 0; i < positions.length; i++) {
            wordGuessed[positions[i]] = letter;
        }
    }
};

}
