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
      var = retrievedPlayer;
      retrievedPlayer =  localStorage.getItem(`${this.id}`)
      var parsedPlayer = JSON.parse(retrievedPlayer); 
  }
  makingThingsWork(){
    console.log(`am i working?`)
    var strPlayer;
    strPlayer = JSON.stringify(this);
    console.log(strPlayer)
  }
};
// constructor - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: [])
// saveWinsToStorage
// retrieveWinsFromStorage


// example instantiation:
// var dogPlayer = new Player('dog', 🐶)


// "🐶"|| "🐱"
