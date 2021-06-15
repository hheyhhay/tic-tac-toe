class Player{
  constructor(id, token){
    this.id = id;
    this.token = token;
    this.isTurn = false;
    this.wins = 0;
  }
  saveWinsToStorage(){
    var strPlayer = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, strPlayer);
  }
  retrieveWinsFromStorage(){
    var retrievedPlayer =  localStorage.getItem(`${this.id}`)
    var parsedPlayer = JSON.parse(retrievedPlayer);
    var updatedWins = parsedPlayer.wins;
      this.wins = updatedWins;
  }
};
