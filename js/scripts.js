var player1 = new Player("jared");
//backend
function DiceRoll(sides){
  roll = this.roll;
  roll  =  Math.floor(parseInt(Math.random() * (sides +1)));
  if(this.roll === 0){
    return DiceRoll(sides);
  }
  return roll;
  // console.log(roll);
  // roll = 0;
}

function Player(name){
  this.name = name;
  this.race = [];
  this.str = 0;
  this.dex = 0;
  this.int = 0;
}

Player.prototype.newRace = function(){
  if(this.race.includes("elf")){
    this.int += 2;
  }

};



//front end
$(document).ready(function(){
  $('#D20').click(function(event){
    event.preventDefault();
    var dice = parseInt($('#D20').val());
    var dieResult = DiceRoll(dice);
    $('.output').prepend('<p>' + dieResult + '</p>');
    console.log(dieResult);

  });
});
