class Game{
  constructor(dogPlayer, catPlayer){
    this.dogPlayer = dogPlayer;
    this.catPlayer = catPlayer;
    this.icon = dogPlayer.token;
    this.placement = ["","","", "","","","","","",];
    this.hasWinner = false;
    this.isDraw = false;
    this.winner;
  }

  updatesPlayer(){
    if (!this.dogPlayer.turn) {
      this.dogPlayer.turn = true;
      this.catPlayer.turn = false;
      this.icon = this.dogPlayer.token
    } else {
      this.dogPlayer.turn = false;
      this.catPlayer.turn = true;
      this.icon = this.catPlayer.token
    }
  }

  trackGame(indexPlayed){
    if (this.placement[indexPlayed]===""){
      this.placement.splice(indexPlayed, 1, this.icon)
      //disable updates player.
} else  {return}
    // this.checksForEmpty(indexPlayed);
     // will update the array
    // return (this.icon)
  };
  checksForEmpty(indexPlayed){
    if (indexPlayed !== "") {
      console.log('?')
      return
    }
  }

//   checksForEmpty(){
//     for (var i = 0; i<this.placement.length; i++){
//       if (this.placement[i] === "") {
//         console.log('im used here')
//           return 'next turn'
//       }
//   }
// }
  checksForWinner(){
        if (this.placement[1] === this.placement[2] && this.placement[2]=== this.placement[0]){
          this.checksForValue(this.placement[1], this.placement[2], this.placement[0])
        } if (this.placement[3] === this.placement[4] && this.placement[5] === this.placement[4]){
          this.checksForValue(this.placement[3], this.placement[4], this.placement[5])
        } if (this.placement[6] === this.placement[7] && this.placement[8] === this.placement[7]){
          this.checksForValue(this.placement[6], this.placement[7], this.placement[8])
        } if (this.placement[6] === this.placement[4] && this.placement[2] === this.placement[4]){
          this.checksForValue(this.placement[6], this.placement[4], this.placement[2])
        } if (this.placement[0] === this.placement[4] && this.placement[8] === this.placement[4]){
          this.checksForValue(this.placement[0], this.placement[4], this.placement[8])
        } if (this.placement[0] === this.placement[3] && this.placement[6] === this.placement[3]){
          this.checksForValue(this.placement[0], this.placement[3], this.placement[6])
        }  if (this.placement[1] === this.placement[4] && this.placement[7]=== this.placement[4]){
          this.checksForValue(this.placement[1], this.placement[4], this.placement[7])
        } if (this.placement[2] === this.placement[5] && this.placement[8]=== this.placement[5]){
          this.checksForValue(this.placement[2], this.placement[5], this.placement[8])
        }
        this.checksForDraw()
        // } else { this.checksForEmpty();
        //     }
  }
  checksForValue(comparsion1, comparsion2, comparsion3){
    if (comparsion1 || comparsion2 || comparsion3 !== "") {
        if (this.icon === this.dogPlayer.token){
          this.dogPlayer.wins++
          this.winner = this.dogPlayer;
          this.hasWinner = true;
          return
        } else if( this.icon === this.catPlayer.token){
          this.catPlayer.wins++;
          this.winner = this.catPlayer;
          this.hasWinner = true;
          return
        }
    }
  }
  clearBoard(){
    currentGame.placement = ["","","", "","","","","","",];
    currentGame.hasWinner = false;
  }

  checksForDraw(){
    if (!this.placement.includes("")&& !this.hasWinner){
      this.isDraw = true;
    }
  }
}
