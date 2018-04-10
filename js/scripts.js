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
  this.str = 10;
  this.dex = 10;
  this.int = 10;
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

  $(".points").click(function(event){
    event.preventDefault();
    if ($(this).val() === "decr") {
      pointsToSpend++;
      player1.dex--;
    }
    if ($(this).val() === "incr" && pointsToSpend != 10) {
      pointsToSpend--;
      player1.dex++;
    }
    if (pointsToSpend <= 0) {
      $("#button").attr({disabled: true});
    }
    else {
      $("#button").attr({disabled: false});
    }

    $("#attributePoints").text(player1.dex);

    console.log("dex score " + player1.dex);
    console.log("pointsToSpend " + pointsToSpend);



    // if (pointsToSpend === 10) {
    //   $("#nottub").attr('disabled',"true");
    // }
    // else if (pointsToSpend >= 1 ) {
    //     $("#nottub").attr('disabled',"false");
    // }
  })


});
