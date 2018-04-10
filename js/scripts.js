var player1 = new Player("jared");
//backend
function DiceRoll(sides){
  roll = this.roll;
  roll  =  Math.floor(parseInt(Math.random() * (sides +1)));
  if(this.roll === 0){
    return DiceRoll(sides);
  }
  return roll;

}

function Player(name){ //player constructor
  this.name = name;
  this.race = [];
  this.class = [];
  this.str = 10; //strength stat
  this.dex = 10; //dexterity stat
  this.int = 10; //intelligence stat
  this.con = 10; //constitution stat
  this.wis = 10; //wisdom stat
  this.isma = 10; //charisma stat

}

Player.prototype.raceCheck = function(){ //Checks race and adds stats
  if(this.race.includes("elf")){
    this.dex += 2;
  } else if(this.race.includes("human")){
    this.str += 1; this.dex += 1; this.int += 1; this.con += 1; this.wis += 1; this.isma += 1;
  } else if(this.race.includes("dwarf")){
    this.str += 2; this.con += 2;
  } else if(this.race.includes("halfling")){
    this.dex += 2;
  }

};

//Skills: Athletics, Medicine, Persuasion, Survival
Player.prototype.classCheck = function(){
  if(this.class.includes("wizard") && this.int >= 12 && this.int <= 13){
    roll += 1;
  } else if (this.int >= 14 && this.int <= 15){
    roll += 2;
  }
}
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
      pointsToSpend--;
    }
    if ($(this).val() === "incr") {
      pointsToSpend++;
    }
    if (pointsToSpend === 0) {
      $("#button").attr({disabled: true});

    }
    else {
      console.log(pointsToSpend);
    }
    // else {
    //   $('#button').attr('disabled','true');
    // }
    //console.log(pointsToSpend);



    // if (pointsToSpend === 10) {
    //   $("#nottub").attr('disabled',"true");
    // }
    // else if (pointsToSpend >= 1 ) {
    //     $("#nottub").attr('disabled',"false");
    // }
  })


});
