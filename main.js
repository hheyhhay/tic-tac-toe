var selectedCell;
var dogPlayer = new Player("dog", "🐶");
var catPlayer = new Player("cat", "🐱");
var newGame = new Game(dogPlayer, catPlayer);

//instanciates 2 new players and a new game.

// sets up querySelectors
var index0 = document.getElementById('cell-0');
var index1 = document.getElementById('cell-1');
var index2 = document.getElementById('cell-2');
var index3 = document.getElementById('cell-3');
var index4 = document.getElementById('cell-4');
var index5 = document.getElementById('cell-5');
var index6 = document.getElementById('cell-6');
var index7 = document.getElementById('cell-7');
var index8 = document.getElementById('cell-8');
var gameBoard = document.getElementById('gameboard');
var middleSection = document.getElementById('middle');
var changeTurnText = document.getElementById('turn-txt');
var dogWins = document.getElementById('dog-wins')
var catWins = document.getElementById('cat-wins')

//event listeners
middleSection.addEventListener('click', updateCell);
window.addEventListener('load', intializeGame);


console.log(newGame.placement)
console.log(newGame.placement.length)
console.log(newGame.icon);


// on page load, the default player is player1.
function intializeGame(){
  console.log('!')
  newGame.updatesPlayer();
  renderBoard();
  // newGame.player1.isTurn = true;
}

function getTarget(event){
  if (!event){
    event = window.event;
  }
  return console.log(event.target || event.srcElement);
}

function gameProcess(){
  var currentWinner
  newGame.checksWinner();
  if (newGame.hasWinner === true){
    currentWinner = newGame.winner;
    updateWinner(currentWinner);
  }
  newGame.updatesPlayer()
  renderBoard()
}

function updateCell(event) {
  selectedCell = event.target.parentNode.parentNode;
  var target;
  target = getTarget(event)
  if (newGame.hasWinner){
    clearBoard()
  }
  // if index0 is clicked, the console logs 'hi',
  // updates the DM (this.placement), then it changes who the player is, then it renders/
  //the board w/ the updated information.

  // I think i can refractor this w/ an array?
  if(event.target.className === "cell cell-0"){
    console.log('hi')
    newGame.trackGame('0');
    gameProcess()
  } if (event.target.className === 'cell cell-1'){
    newGame.trackGame('1');
    gameProcess()
  } if (event.target.className === 'cell cell-2'){
    newGame.trackGame('2');
    gameProcess()
  } if (event.target.className === 'cell cell-3'){
    newGame.trackGame('3');
    gameProcess()
  }if (event.target.className === 'cell cell-4'){
    newGame.trackGame('4');
    gameProcess()
  }if (event.target.className === 'cell cell-5'){
    newGame.trackGame('5');
    gameProcess()
  }if (event.target.className === 'cell cell-6'){
    newGame.trackGame('6');
    gameProcess()
  } if (event.target.className === 'cell cell-7'){
    newGame.trackGame('7');
    gameProcess()
  } if (event.target.className === 'cell cell-8'){
    newGame.trackGame('8');
    gameProcess()
  }
};




function renderGameBoard(){
    var gameBoardHTML = "";
    gameBoardHTML=  `
      <div class="cell cell-0" id = "cell-0">${newGame.placement[0]}</div>
      <div class="cell cell-1">${newGame.placement[1]}</div>
      <div class="cell cell-2">${newGame.placement[2]}</div>
      <div class="cell cell-3">${newGame.placement[3]}</div>
      <div class="cell cell-4">${newGame.placement[4]}</div>
      <div class="cell cell-5">${newGame.placement[5]}</div>
      <div class="cell cell-6">${newGame.placement[6]}</div>
      <div class="cell cell-7">${newGame.placement[7]}</div>
      <div class="cell cell-8">${newGame.placement[8]}</div>
    `
    gameBoard.innerHTML = gameBoardHTML
}

function renderHeader(){
  var headerText = "";
  if(!newGame.placement.includes("") && !newGame.hasWinner){ //icons are full & its a draw
      headerText = `It's a Draw - click any square to reset game`
  } else if (newGame.hasWinner === false){
    headerText = `It's ${newGame.icon} turn`
  } else if (newGame.hasWinner === true){
      headerText = ` ${newGame.winner.token} is winner :)`
  }
  changeTurnText.innerText = headerText;
}


function renderBoard(){
  renderHeader();
  renderGameBoard();


  //     var boardHTML = ""
  // if (newGame.hasWinner === false){
  //
  //     boardHTML =   `<h1 id = "turn-txt">${newGame.winner.token} has WON! CLICK to restart Game</h1>
  //               <div class = "grid" id="gameboard">
  //                 <div class="cell cell-0" id = "cell-0">${newGame.placement[0]}</div>
  //                 <div class="cell cell-1">${newGame.placement[1]}</div>
  //                 <div class="cell cell-2">${newGame.placement[2]}</div>
  //                 <div class="cell cell-3">${newGame.placement[3]}</div>
  //                 <div class="cell cell-4">${newGame.placement[4]}</div>
  //                 <div class="cell cell-5">${newGame.placement[5]}</div>
  //                 <div class="cell cell-6">${newGame.placement[6]}</div>
  //                 <div class="cell cell-7">${newGame.placement[7]}</div>
  //                 <div class="cell cell-8">${newGame.placement[8]}</div>
  //               </div>`
  //               middleSection.innerHTML = boardHTML;
  // } if (newGame.hasWinner === true){
  //   boardHTML =   `<h1 id = "turn-txt"> ${newGame.winner.token} has WON! CLICK to restart Game </h1>
  //             <div class = "grid" id="gameboard">
  //               <div class="cell cell-0" id = "cell-0">${newGame.placement[0]}</div>
  //               <div class="cell cell-1">${newGame.placement[1]}</div>
  //               <div class="cell cell-2">${newGame.placement[2]}</div>
  //               <div class="cell cell-3">${newGame.placement[3]}</div>
  //               <div class="cell cell-4">${newGame.placement[4]}</div>
  //               <div class="cell cell-5">${newGame.placement[5]}</div>
  //               <div class="cell cell-6">${newGame.placement[6]}</div>
  //               <div class="cell cell-7">${newGame.placement[7]}</div>
  //               <div class="cell cell-8">${newGame.placement[8]}</div>
  //             </div>`
  //             middleSection.innerHTML = boardHTML;
  // } if

  }


function updateWinner(winningPlayer){
  if (winningPlayer === newGame.player1){
    dogWins.innerText = `${newGame.player1.wins} wins!`
  } else if (winningPlayer === newGame.player2){
    catWins.innerText =`${newGame.player2.wins} wins`
    }
  }
  function clearBoard(){
    newGame.placement = ["","","", "","","","","","",];
    newGame.hasWinner = false;
    renderBoard();
  }

function checksForDraw(){
  if(!newGame.placement.includes("") && !newGame.hasWinner){ //icons are full & its a draw

  }
}























//
