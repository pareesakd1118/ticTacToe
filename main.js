// Your game logic methods must include, but are not limited to:
// A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
// A function called increaseWins - increases the count of a player’s wins (should work for either player)
// A function that keeps track of the data for the game board
// A function that keeps track of which player’s turn it currently is
// A function that checks the game board data for win conditions
// A function that detects when a game is a draw (no one has won)
// A function that resets the game board’s data to begin a new game


// Create the functions that describe/update the players and their data
// Create the functions that describe/update the game board and gameplay
// Reflect: without thinking about the DOM, could you call all the necessary functions that a game would need in order to function? Would your data update properly? Would your game be able to know when someone has won? etc
// Create central game board on the DOM and connect it to the game’s data
// Display each player’s data in the sidebars
// Connect the data model to the DOM - ensure that the data model updates based on user interaction
// Automatically reset the game board to allow for a new game to be played after the previous game is won

//DATA MODELS
var playerInfo = [];
var gameBoardArray = [];
var play;
var currentPlayer = "🎃";


//QUERY SELECTORS
var gameBoard = document.querySelector('.board-container');
var turn = document.querySelector('.turn');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

//EVENT LISTENERS
gameBoard.addEventListener("click", function(event) {
    if (!event.target.closest("td").innerText) {
        createPlay(event);
        pushPlay();
        switchCurrentPlayer();
        renderGameBoard(); 
    }
});


//FUNCTIONS
//this function creates an object with info about the play on the game board 
function createPlay(event) {
    play = {
        id: event.target.closest("td").id,
        emoji: currentPlayer
    }
  
    return play 
}

//this function pushes the play to the data model (gameBoardArray)
function pushPlay() {
    gameBoardArray.push(play)

    return gameBoardArray
}

//this function renders the gameboard based on the data model (gameBoard)
function renderGameBoard() {
    for (var i = 0; i < gameBoardArray.length; i++) {
        document.getElementById([gameBoardArray[i].id]).innerText = gameBoardArray[i].emoji
    }

    turn.innerText = `It's ${currentPlayer}'s Turn`
}

//this function switches the current player
function switchCurrentPlayer() {
    currentPlayer === "🎃" ? currentPlayer = "🧟‍♂️" : currentPlayer = "🎃"
    
    return currentPlayer
}