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

// gameBoard.style.cursor = pointer;

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
        setTimeout(function() {
            resetGameboard();
        }, 7000);
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
 };

//This function detects if one of the players has a win 
 function detectWin() {
    var winningCombos = [["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"], ["one", "four", "seven"], ["two", "five", "eight"], ["three", "six", "nine"], ["one", "five", "nine"], ["three", "five", "seven"]];
    for (var i = 0; i < winningCombos.length; i++) {
        if (winningCombos[i].every(element => playerOneInfo.spotsOccupied.includes(element))) {
            playerOneInfo.wonCurrentGame = true;

        }
        if (winningCombos[i].every(element => playerTwoInfo.spotsOccupied.includes(element))) {
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

//This function resets the gameboard in case of a win or draw
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
    }
 };