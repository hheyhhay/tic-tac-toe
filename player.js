class Player{
  constructor(id, token){
    this.id = id; // dog or cat
    this.token = token ;
    this.isTurn = false;
    this.wins = 0; //going to update each time the player wins ++
  }
  saveWinsToStorage(){
    var strPlayer;
    strPlayer = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, strPlayer);
  }
  retrieveWinsFromStorage(){
      var retrievedPlayer;
      retrievedPlayer =  localStorage.getItem(`${this.id}`)
      var parsedPlayer = JSON.parse(retrievedPlayer);
      console.log(parsedPlayer, 'inside')
      console.log(this.wins, parsedPlayer.wins)
      var updatedWins;
      updatedWins = parsedPlayer.wins;
      this.wins = updatedWins;
      console.log(this, 'from inside')
  }
  makingThingsWork(){
    console.log(`am i working?`)
    var strPlayer;
    strPlayer = JSON.stringify(this);
    console.log(strPlayer)
  }
};
