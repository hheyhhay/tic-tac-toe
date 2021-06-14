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
var changeTurnText = document.getElementById('turn-text');

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
  // newGame.player1.isTurn = true;
}

function getTarget(event){
  if (!event){
    event = window.event;
  }
  return console.log(event.target || event.srcElement);
}

function gameProcess(){
  newGame.checksWinner();
  newGame.updatesPlayer()
  renderBoard()
}

function updateCell(event) {
  selectedCell = event.target.parentNode.parentNode;
  console.log(selectedCell)
  var target;
  target = getTarget(event)
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





function renderBoard(){
  var boardHTML = ""
  // for (var i = 0; i<newGame.placement.length; i++){
  //
  // }
    //  `<div class="cell cell-0">${newGame.placement[0]}</div>
    //             <div class="cell cell-1">${newGame.placement[1]}</div>
    //             <div class="cell cell-2">${newGame.placement[2]}</div>
    //             <div class="cell cell-3">${newGame.placement[3]}</div>
    //             <div class="cell cell-4">${newGame.placement[4]}</div>
    //             <div class="cell cell-5">${newGame.placement[5]}</div>
    //             <div class="cell cell-6">${newGame.placement[6]}</div>
    //             <div class="cell cell-7">${newGame.placement[7]}</div>
    //             <div class="cell cell-8">${newGame.placement[8]}</div>`;
    // turnText = `It's ${newGame.icon} turn`

    boardHTML =   `<h1 id = "turn-txt">It's ${newGame.icon} turn</h1>
              <div class = "grid" id="gameboard">
                <div class="cell cell-0" id = "cell-0">${newGame.placement[0]}</div>
                <div class="cell cell-1">${newGame.placement[1]}</div>
                <div class="cell cell-2">${newGame.placement[2]}</div>
                <div class="cell cell-3">${newGame.placement[3]}</div>
                <div class="cell cell-4">${newGame.placement[4]}</div>
                <div class="cell cell-5">${newGame.placement[5]}</div>
                <div class="cell cell-6">${newGame.placement[6]}</div>
                <div class="cell cell-7">${newGame.placement[7]}</div>
                <div class="cell cell-8">${newGame.placement[8]}</div>
              </div>`

            // <div class="cell cell-0" id = "cell-0">🐶 </div>
            // <div class="cell cell-1">🐶</div>
            // <div class="cell cell-2">🐶</div>
            // <div class="cell cell-3">🐶</div>
            // <div class="cell cell-4">🐶</div>
            // <div class="cell cell-5">🐶</div>
            // <div class="cell cell-6">🐶</div>
            // <div class="cell cell-7">🐶</div>
            // <div class="cell cell-8">🐶</div>`


  middleSection.innerHTML = boardHTML;
  // changeTurnText.innerText = turnText;
}
























//
