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
  this.str = 0;
  this.dex = 0;
  this.int = 0;
  this.name = name;
  this.race = [];
  this.skills = [];
  //skills
}

Player.prototype.raceCheck = function(){
  if(this.race.includes("elf")){
    this.int += 10;
  } else if(this.race.includes("human")){
    this.str += 1; this.dex += 1; this.int += 1;
  } else if(this.race.includes("dwarf")){
    this.dex += 5;
  }

};

//Athletics, Medicine, Persuasion, Survival
Player.prototype.modCheck = function(){
  if(this.skills.includes("medicine") && this.int >= 10){
    return true;
  } else {
    return false;
  }
}
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
