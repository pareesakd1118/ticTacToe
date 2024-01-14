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

//DATA MODELS/GLOBAL VARIABLES---------------------------------------------------------------------------------------------------------------
var playerOneInfo = {
    wins: 0,
    spotsOccupied: [],
    wonCurrentGame: false,
    emoji: "🎃"
};
var playerTwoInfo = {
    wins: 0,
    spotsOccupied: [],
    wonCurrentGame: false,
    emoji: "🧟‍♂️"
};
var gameBoardArray = [];
var play;
var currentPlayer = "🎃";

//QUERY SELECTORS---------------------------------------------------------------------------------------------------------------
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
var playerOneWins = document.querySelector('.🎃')
var playerTwoWins = document.querySelector('.🧟‍♂️')

//EVENT LISTENERS---------------------------------------------------------------------------------------------------------------
gameBoard.addEventListener("click", function(event) {
    if (!event.target.closest("td").innerText) {
        createPlay(event);
        pushPlay();
        switchCurrentPlayer();
        renderGameBoard();
        changeCurrentPLayer(); 
        updatePlayerSpots();
        detectWin();
        increaseWins();
        announceWinner();
        detectDraw();
        updateWins();
        setTimeout(resetGameboard(), 1000);
    }
    
});

//FUNCTIONS---------------------------------------------------------------------------------------------------------------
//This function creates an object with info about the play on the game board 
function createPlay(event) {
    play = {
        id: event.target.closest("td").id,
        emoji: currentPlayer
    }
  
    return play; 
};


//This function pushes the play to the data model (gameBoardArray)
function pushPlay() {
    gameBoardArray.push(play)

    return gameBoardArray;
};

//This function switches the current player in the data model
function switchCurrentPlayer() {
    currentPlayer === "🎃" ? currentPlayer = "🧟‍♂️" : currentPlayer = "🎃"
    
    return currentPlayer;
};

//This function renders the gameboard based on the data model (gameBoard)
function renderGameBoard() {
    for (var i = 0; i < gameBoardArray.length; i++) {
        document.getElementById([gameBoardArray[i].id]).innerText = gameBoardArray[i].emoji;
    }
};

//This function announces the current player on the DOM 
function changeCurrentPLayer() {
    turn.innerText = `It's ${currentPlayer}'s Turn`;
};

//This function updates info on which spots each player occupies
 function updatePlayerSpots() {
    for (var i = 0; i < gameBoardArray.length; i++) {
        if (gameBoardArray[i].emoji === "🎃") {
            playerOneInfo.spotsOccupied.push(gameBoardArray[i].id);
        } else {
            playerTwoInfo.spotsOccupied.push(gameBoardArray[i].id);
        }
    }
    console.log("P1: ", playerOneInfo.spotsOccupied)
    console.log("P2: ", playerTwoInfo.spotsOccupied)
 };

//This function detects if one of the players has a win 
 function detectWin() {
    var winningCombos = [["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"], ["one", "four", "seven"], ["two", "five", "eight"], ["three", "six", "nine"], ["one", "five", "nine"], ["three", "five", "seven"]];
    for (var i = 0; i < winningCombos.length; i++) {
        if (winningCombos[i].every(element => playerOneInfo.spotsOccupied.includes(element))) {
            console.log("P1 WINNER")
            playerOneInfo.wonCurrentGame = true;

        }
        if (winningCombos[i].every(element => playerTwoInfo.spotsOccupied.includes(element))) {
            console.log("P2 WINNER")
            playerTwoInfo.wonCurrentGame = true;
        }
    }

 };

 //This function increases the number of wins the player has in the data model in the case of a win 
 function increaseWins() {
    if (playerOneInfo.wonCurrentGame) {
        playerOneInfo.wins ++;
    }
    if (playerTwoInfo.wonCurrentGame) {
        playerTwoInfo.wins ++;
    }
    console.log("wins P1: ", playerOneInfo.wins, playerOneInfo.wonCurrentGame)
    console.log("wins P2: ", playerTwoInfo.wins, playerTwoInfo.wonCurrentGame)
 };

 //This function announces the winner 
 function announceWinner() {
    if (playerOneInfo.wonCurrentGame) {
        turn.innerText = `It seems as though ${playerOneInfo.emoji} has won...`;
    }
    if (playerTwoInfo.wonCurrentGame) {
        turn.innerText = `It seems as though ${playerTwoInfo.emoji} has won...`;
    }
 };

 //This function detects/announces a draw 
 function detectDraw() {
    if (!playerOneInfo.wonCurrentGame && !playerOneInfo.wonCurrentGame && gameBoardArray.length === 9) {
        turn.innerText = "AHA! It seems we have a draw..."
    }
 };

 //This function updates the players number of wins 
 function updateWins() {
    if (playerOneInfo.wonCurrentGame || playerTwoInfo.wonCurrentGame) {
        playerOneWins.innerText = `${playerOneInfo.wins} wins`;
        playerTwoWins.innerText = `${playerTwoInfo.wins} wins`;
    }
 };



 //This function resets the game board after a win or draw 
//  function resetGameboard() {
//     if (playerOneInfo.wonCurrentGame || playerOneInfo.wonCurrentGame || gameBoardArray.length === 9) {
//         for (var i = 0; i < gameBoardArray.length; i++) {
//             document.getElementById([gameBoardArray[i].id]).innerText = "";
//         }    
//     }

//     turn.innerText = `It's ${currentPlayer}'s Turn`;
//  }


 function resetGameboard() {
    if (playerOneInfo.wonCurrentGame || playerTwoInfo.wonCurrentGame || gameBoardArray.length === 9) {
        for (var i = 0; i < gameBoardArray.length; i++) {
            document.getElementById([gameBoardArray[i].id]).innerText = "";
        }
        gameBoardArray = [];
        playerOneInfo.wonCurrentGame = false;
        playerTwoInfo.wonCurrentGame = false;
        playerOneInfo.spotsOccupied = [];
        playerTwoInfo.spotsOccupied = [];
        changeCurrentPLayer();

    // renderGameBoard();

    }
    console.log("WE MADE IT HERE")
    console.log("player1 info: ", playerOneInfo)
    console.log("player2 info: ", playerTwoInfo)
 }