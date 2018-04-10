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
  } else if(this.race.includes("human")) {
    this.str += 1; this.dex += 1; this.int += 1;
  } else if(this.race.includes("dwarf")){
    this.str += 5;
  }

};



//front end
$(document).ready(function(){
  var pointsToSpend = 10;
  $('#D20').click(function(event){
    event.preventDefault();
    var dice = parseInt($('#D20').val());
    var dieResult = DiceRoll(dice);
    $('.output').prepend('<p>' + dieResult + '</p>');
    console.log(dieResult);

  });

  $("#button").click(function(event){
    event.preventDefault();
    pointsToSpend--;
    console.log(pointsToSpend);
    if (pointsToSpend === 0) {
      $("#button").attr('disabled',"disabled");
    }else {
        
    }
  })
  $("#nottub").click(function(event){
    event.preventDefault();
    pointsToSpend++;
    console.log(pointsToSpend);
    if (pointsToSpend === 10) {
      $("#nottub").attr('disabled',"disabled");
    }
  })


});
