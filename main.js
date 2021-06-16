var dogPlayer = new Player("dog", "🐶");
var catPlayer = new Player("cat", "🐱");
var currentGame = new Game(dogPlayer, catPlayer);

//  querySelectors
var gameBoard = document.getElementById('gameboard');
var middleSection = document.getElementById('middle');
var header = document.getElementById('turn-txt');
var dogWins = document.getElementById('dog-wins')
var catWins = document.getElementById('cat-wins')
var instruction = document.getElementById('instruction-txt')

//event listeners
middleSection.addEventListener('click', updateCell);
window.addEventListener('load', intializeGame);

//Functions
function intializeGame(){
  currentGame.updatesPlayer();
  currentGame.dogPlayer.retrieveWinsFromStorage();
  currentGame.catPlayer.retrieveWinsFromStorage();
  updateWinner(catPlayer);
  updateWinner(dogPlayer);
  renderBoard();
  currentGame.start = false;
};
function getTarget(event){
  if (!event){
    event = window.event;
  }
  return event.target;
};
function updateCell(event) {
  var target;
  target = getTarget(event);
  if (currentGame.hasWinner){
    currentGame.clearBoard();
    renderBoard();
  } else if (currentGame.isDraw){
    currentGame.clearBoard();
    renderBoard();
  }
  for (var i = 0; i<currentGame.placement.length; i++){
    if(event.target.id === `cell-${i}`){
      currentGame.trackGame(i)
      gameProcess()
    }
  }
};
function gameProcess(){
  var currentWinner
  currentGame.checksForWinner();
  if (currentGame.hasWinner === true){
    currentWinner = currentGame.winner;
    updateWinner(currentWinner);
  }
  currentGame.updatesPlayer();
  renderBoard();
};
function renderBoard(){
  renderHeader();
  renderGameBoard();
};
function renderGameBoard(){
  var gameBoardHTML = "";
  gameBoardHTML=  `<div class="cell" id="cell-0">${currentGame.placement[0]}</div>
      <div class="cell" id="cell-1">${currentGame.placement[1]}</div>
      <div class="cell" id="cell-2">${currentGame.placement[2]}</div>
      <div class="cell" id="cell-3">${currentGame.placement[3]}</div>
      <div class="cell" id="cell-4">${currentGame.placement[4]}</div>
      <div class="cell" id="cell-5">${currentGame.placement[5]}</div>
      <div class="cell" id="cell-6">${currentGame.placement[6]}</div>
      <div class="cell" id="cell-7">${currentGame.placement[7]}</div>
      <div class="cell" id="cell-8">${currentGame.placement[8]}</div>`
  gameBoard.innerHTML = gameBoardHTML;
};
function renderHeader(){
  var headerText = "";
  var instructionText = "Click any square to restart";
  if (currentGame.start){
    headerText = `It's ${currentGame.icon} turn`;
    instructionText = `${currentGame.icon} Make your move!`;
    } else if(currentGame.isDraw){
      headerText = `It's a draw`;
    } else if (currentGame.hasWinner === false){
    headerText = `It's ${currentGame.icon} turn`;
    instructionText = "";
    } else if (currentGame.hasWinner){
      headerText = ` ${currentGame.winner.token} is winner`;
    }
  header.innerText = headerText;
  instruction.innerText = instructionText;
};

function updateWinner(winningPlayer){
  if (winningPlayer === currentGame.dogPlayer){
    dogWins.innerText = `${currentGame.dogPlayer.wins} wins!`;
    currentGame.dogPlayer.saveWinsToStorage();
  } else if (winningPlayer === currentGame.catPlayer){
    catWins.innerText =`${currentGame.catPlayer.wins} wins!`;
    currentGame.catPlayer.saveWinsToStorage();
  }
};
