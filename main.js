var selectedCell;
var dogPlayer = new Player("dog", "🐶");
var catPlayer = new Player("cat", "🐱");
var currentGame = new Game(dogPlayer, catPlayer);


// sets up querySelectors
var gameBoard = document.getElementById('gameboard');
var middleSection = document.getElementById('middle');
var header = document.getElementById('turn-txt');
var dogWins = document.getElementById('dog-wins')
var catWins = document.getElementById('cat-wins')

//event listeners
middleSection.addEventListener('click', updateCell);
window.addEventListener('load', intializeGame);



function intializeGame(){
  currentGame.updatesPlayer();
  renderBoard();
  // currentGame.dogPlayer.isTurn = true;
}

function getTarget(event){
  if (!event){
    event = window.event;
  }
  return event.target;
}

function updateCell(event) {
  selectedCell = event.target.parentNode.parentNode;
  var target;
  target = getTarget(event)
  if (currentGame.hasWinner){
    clearBoard()
  } else if ( !currentGame.placement.includes("") && !currentGame.hasWinner){
    clearBoard();
  }
  for (var i = 0; i<currentGame.placement.length; i++){
    if(event.target.className === `cell cell-${i}`){
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
  currentGame.updatesPlayer()
  renderBoard()
}

function renderBoard(){
  renderHeader();
  renderGameBoard();
  }

function renderGameBoard(){
    var gameBoardHTML = "";
    gameBoardHTML=  `<div class="cell cell-0" id = "cell-0">${currentGame.placement[0]}</div>
        <div class="cell cell-1">${currentGame.placement[1]}</div>
        <div class="cell cell-2">${currentGame.placement[2]}</div>
        <div class="cell cell-3">${currentGame.placement[3]}</div>
        <div class="cell cell-4">${currentGame.placement[4]}</div>
        <div class="cell cell-5">${currentGame.placement[5]}</div>
        <div class="cell cell-6">${currentGame.placement[6]}</div>
        <div class="cell cell-7">${currentGame.placement[7]}</div>
        <div class="cell cell-8">${currentGame.placement[8]}</div>`
    gameBoard.innerHTML = gameBoardHTML
};

function renderHeader(){
  var headerText = "";
  if(!currentGame.placement.includes("") && !currentGame.hasWinner){ //icons are full & its a draw
      headerText = `It's a Draw - click any square to reset game`;
  } else if (currentGame.hasWinner === false){
    headerText = `It's ${currentGame.icon} turn`;
  } else if (currentGame.hasWinner === true){
      headerText = ` ${currentGame.winner.token} is winner - click any square to restart`;
  }
  header.innerText = headerText;
};

function updateWinner(winningPlayer){
  if (winningPlayer === currentGame.dogPlayer){
    dogWins.innerText = `${currentGame.dogPlayer.wins} wins!`
  } else if (winningPlayer === currentGame.catPlayer){
    catWins.innerText =`${currentGame.catPlayer.wins} wins`
    }
  }
  function clearBoard(){
    currentGame.placement = ["","","", "","","","","","",];
    currentGame.hasWinner = false;
    renderBoard();
  }
























//
