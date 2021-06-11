class Game{
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.icon = player1.token; // default cat starts
    this.placement = ["","","", "","","","","","",];
    this.hasWinner = false;

  }
  intainciatePlayers(){
    var player2 = new Player('dog', "🐶")
    var player1 = new Player('cat', "🐱")
    var game1 = new Game(player1, player2)
  }
  updatesPlayer(){
    if (this.icon === player1.token){
      this.icon = player2.token
    } else { this.icon = player1.token }
  }

  trackGame(indexPlayed){ // example they choose [1]
    this.placement.splice(indexPlayed, 1, this.icon) // will update the array
    return (this.icon)
  };
  checksForValue(comparsion1, comparsion2, comparsion3){
    for (var i = 0; i<this.placement.length; i++){
      if (this.placement[i] !== ""){
        console.log('hi')
        return(`${this.icon} is the winner`)
      } else if (this.placement[i] === "") {
        return 'maybe?'}
    }
  }
  checksWinner(){

        if (this.placement[1] === this.placement[2] && this.placement[2]=== this.placement[3]){
          this.checksForValue(this.placement[1], this.placement[2], this.placement[3] )
        } if (this.placement[3] === this.placement[4] && this.placement[5]){
          this.checksForValue(this.placement[3], this.placement[4], this.placement[5])
        } if (this.placement[6] === this.placement[7] && this.placement[8]){
          this.checksForValue(this.placement[6], this.placement[7], this.placement[8])
        } if (this.placement[6] === this.placement[4] && this.placement[2]){
          this.checksForValue(this.placement[6], this.placement[4], this.placement[2])
        } if (this.placement[0] === this.placement[4] && this.placement[8]){
          this.checksForValue(this.placement[0], this.placement[4], this.placement[8])
        } if (this.placement[0] === this.placement[3] && this.placement[6]){
          this.checksForValue(this.placement[0], this.placement[3], this.placement[6])
        }  if (this.placement[1] === this.placement[4] && this.placement[7]){
          this.checksForValue(this.placement[1], this.placement[4], this.placement[7])
        } if (this.placement[2] === this.placement[5] && this.placement[8]){
          this.checksForValue(this.placement[2], this.placement[5], this.placement[8])
        } else {
            for (var i = 0; i<this.placement.length; i++){
              if (this.placement[i] === "") {
                return 'next turn'
              }
            }
            }

      }


}
// A game.js file that contains a Game class.
// A Game should include:
// Two Player instances
// the class will take an argument of the player object built in
//the Player file.


// A way to keep track of the data for the game board
// What are the different ways someone could win?

// A way to keep track of which player’s turn it currently is
// method - change turn

// A way to check the Game’s board data for win conditions
// checks winner method?
// A way to detect when a game is a draw (no one has won)
// if no one wone
// A way to reset the Game’s board to begin a new game
//clear board
