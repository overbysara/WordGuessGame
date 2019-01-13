
//Array of words
var wordArray = ["heat", "cicadas", "hiking", "deck", "sunset", "grilling", "beer", "camping", "fireworks", "gardening", "baseball", "stargazing", "picnics", "smores", "flowers", "sunlight"];

//gameStatus is my start/stop controller between questions    
var gameStatus = false;

//Generate randomNumber
var randomNumber = Math.floor(Math.random() * wordArray.length);

//Apply randomNumber to obtain random word
var currentWord = wordArray[randomNumber].word;

//Establish lettersRemaining (for win);
var lettersRemaining = currentWord.length;

//Set up the answer array to store word
var answerArray = []; 

//Use key events to listen for the letters that your players will type.
document.addEventListener("keyup", function(event){
    //If gameStatus (or game round) has been initialized, then proceed to playing.
    if(gameStatus) {
        letterCheck(event);
    } else {
        //If gameStatus (or game round) has completed, re-initialize (or reset) the game.
        init();
    }
});

//Alphabet array for letter checking
var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function letterCheck(guess) {
    //If letter key is press, check if the letter pressed is in the answer.
    if (alphabetArray.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}

//Check whether the guess is correct
var winScore = 0;
function correctGuessCheck(guess) {
    if (currentWord.indexOf(guess.key) > -1) {
        //if guess is correct, run correctGuess function.
        correctGuess(guess);
    } else {
        //If guess is incorrect, run incorrectGuess function.
        incorrectGuess(guess);
    }
}

function correctGuess(guess) {
    if (answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        //If the correctGuess doesn't exist in the answerArray, run addCorrectLetter function.
        addCorrectLetter(guess);
    }
}

function addCorrectLetter(guess) {
    for (var j = 0; j < currentWord.length; j++) {
        //If guess matches an existing letter in the answer.
        if (guess.key === currentWord[j]) {
            //Push correct letter to answerArray as upperCase.
            answerArray[j] = guess.key.toUpperCase();
            displayCurrentWord();
            //Reduce letters remaining for win by one.
            lettersRemaining--;
            //If letters left has reached 0, user wins. 
            if (lettersRemaining === 0) {
                //Add 1 to win score.
                winScore++;
                //Display new win score.
                displayWins();
                //Reveal the Pokemon's identiy.
                changeImage();
                //Turn correct answer green.
                addCorrect();
                //display currentWord with new green font.
                displayCurrentWord();
            }
        }
    }
}

//Set up an incorrect answer array
var incorrectGuessesMade = [];
//Establish the number of guesses.
var guessesLeft = 9;

function incorrectGuess(guess) {
    if (incorrectGuessesMade.indexOf(guess.key.toUpperCase()) < 0) {
        //If the inCorrectGuess doesn't exist in the answerArray, run addIncorrectLetter function.
        addIncorrectLetter(guess);
    }
}

function addIncorrectLetter(guess) {
    //Push incorrect guess into the incorrectGuessesMade array
    incorrectGuessesMade.push(guess.key.toUpperCase());
    //Inform user of incorrectGuessesMade
    displayGuessesMade();
    //Lower guessesLeft by 1
    guessesLeft--;
    //Inform user of guessesLeft
    displayGuessesLeft();
    if (guessesLeft === 0) {
        //If guesses left reaches equals 0, then Game Over.
        changeImage();
        //Display corrent answer.
        displayAnswer();
    }
}


//Displays the number of wins user has obtains.
function displayWins() {
    var winsDisplay = document.querySelector("#wins-text");
    winsDisplay.textContent = winScore;
}

//Displays the letters the user has guessed.
function displayGuessesMade() {
    var guessesMadeDisplay = document.querySelector("#guesses-text");
    guessesMadeDisplay.textContent = incorrectGuessesMade.join(", ");
}

//Displays how many user guesses are left.
function displayGuessesLeft() {
    var guessesLeftDisplay = document.querySelector("#guesses-left");
    guessesLeftDisplay.textContent = guessesLeft;
}

//Displays current solve status of answerArray.
function displayCurrentWord() {
    var currentWordDisplay = document.querySelector("#current-word");
    currentWordDisplay.innerHTML = answerArray.join(" ");
}

//Reveals answer if user is unable to solve.
function displayAnswer() {
    var revealedAnswerDisplay = document.querySelector("#revealedAnswerDisplay");
    revealedAnswerDisplay.textContent = pokemon.toUpperCase();
}


/* Initalize (or re-initialize) the game.
----------------------------------------------------------------------------------------------------------------*/

function init() {
    //Changes gameStatus to ready.
    gameStatus = true;
    
    //Generate a new random number
    randomNumber = Math.floor(Math.random() * wordArray.length);
    
    //Apply new randomNumber to obtain random word (answer), and related images.
    currentWord = wordArray[randomNumber].word;

    //Re-establish lettersRemaining (for win);
    lettersRemaining = currentWord.length;

    //Re-establish answer array.
     answerArray = []; 

    //Convert word answer into an array.
    for (var i = 0; i < currentWord.length; i++) {
        //If an answer has more than one word, use + as a separator. A space will be displayed when currentWord is displayed. Not applicable for this particlar Pokemon game, but here for flexibility.
        if (currentWord[i] === "+") {
            answerArray[i] = "&nbsp;";
        } else {
            //Replace word answer with "_"s
            answerArray[i] = "_";
        }
    }

    //Re-establish lettersRemaining (for win)
    lettersRemaining = currentWord.length;

    //Re-establish guessesLeft for user.
    guessesLeft = 9;
    displayGuessesLeft()

    //Re-establish guessesMade array.
    incorrectGuessesMade = [];
    displayGuessesMade()
    
    //Display current word.
    displayCurrentWord();

    //Empty revealedAnswer display if user was unsuccessful previously.
    revealedAnswerDisplay.textContent = "";

    //Remove greenColor from currentWord if user was successful previously.
    removeCorrect();
}