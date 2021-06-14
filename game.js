class Game{
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.icon = player1.token; // default cat starts
    this.placement = ["","","", "","","","","","",];
    this.hasWinner = false;

  }

  updatesPlayer(){
    if (!this.player1.turn) {
      this.player1.turn = true;
      this.player2.turn = false;
      this.icon = this.player1.token
    } else {
      this.player1.turn = false;
      this.player2.turn = true;
      this.icon = this.player2.token
    }
  }

  trackGame(indexPlayed){ // example they choose [1]
    this.placement.splice(indexPlayed, 1, this.icon) // will update the array
    return (this.icon)
  };
  checksForValue(comparsion1, comparsion2, comparsion3){
    console.log('checking for values')
    if (comparsion1 || comparsion2 || comparsion3 !== "") {
        console.log('checking for three non empty strings')
        console.log(`${this.icon} is the winner`)
        return`${this.icon} is the winner`
    } else { console.log('some zero')
      return "this is a run of strings"
    }
  }
  checksForEmpty(){
    for (var i = 0; i<this.placement.length; i++){
      if (this.placement[i] === "") {
        console.log('next turn')
        return 'next turn'
      }
  }
}
  checksWinner(){
    console.log('placement array inside checksWinner', this.placement)
    console.log('checking for winner')
        if (this.placement[1] === this.placement[2] && this.placement[2]=== this.placement[0]){
          this.checksForValue(this.placement[1], this.placement[2], this.placement[0])
          console.log('1')
        } if (this.placement[3] === this.placement[4] && this.placement[5]){
          this.checksForValue(this.placement[3], this.placement[4], this.placement[5])
          console.log('2')
        } if (this.placement[6] === this.placement[7] && this.placement[8]){
          this.checksForValue(this.placement[6], this.placement[7], this.placement[8])
          console.log('3')
        } if (this.placement[6] === this.placement[4] && this.placement[2] === this.placement[4]){
          this.checksForValue(this.placement[6], this.placement[4], this.placement[2])
          console.log('4')
        } if (this.placement[0] === this.placement[4] && this.placement[8] === this.placement[4]){
          this.checksForValue(this.placement[0], this.placement[4], this.placement[8])
          console.log('5')
        } if (this.placement[0] === this.placement[3] && this.placement[6] === this.placement[3]){
          this.checksForValue(this.placement[0], this.placement[3], this.placement[6])
          console.log('6')
        }  if (this.placement[1] === this.placement[4] && this.placement[7]=== this.placement[4]){
          this.checksForValue(this.placement[1], this.placement[4], this.placement[7])
          console.log('7')
        } if (this.placement[2] === this.placement[5] && this.placement[8]=== this.placement[5]){
          this.checksForValue(this.placement[2], this.placement[5], this.placement[8])
          console.log('8')
        } else { this.checksForEmpty();
            }
          }

}
