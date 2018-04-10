//backend
var player1 = new Player("jared");
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
Player.prototype.intCheck = function(){
  if(this.int <= 1){
    roll -= 5;
  } else if (this.int >= 2 && this.int <= 3){
    roll -= 4;
  } else if (this.int >= 4 && this.int <= 5){
    roll -= 3;
  } else if (this.int >= 6 && this.int <= 7){
    roll -= 2;
  } else if (this.int >= 8 && this.int <= 9){
    roll -= 1;
  } else if (this.int >= 12 && this.int <= 13){
    roll += 1;
  } else if (this.int >= 14 && this.int <= 15){
    roll += 2;
  } else if (this.int >= 16 && this.int <= 17){
    roll += 3;
  } else if (this.int >= 19 && this.int <= 19){
    roll += 4;
  }
}
//front end
$(document).ready(function(){
  $("#attributePoints1").text(player1.str);
  $("#attributePoints2").text(player1.dex);
  $("#attributePoints3").text(player1.con);
  $("#attributePoints4").text(player1.int);
  $("#attributePoints5").text(player1.wis);
  $("#attributePoints6").text(player1.isma);
  var pointsToSpend = 10;
  $('#D20').click(function(event){
    event.preventDefault();
    var dice = parseInt($('#D20').val());
    var dieResult = DiceRoll(dice);
    $('.output').text(dieResult);
    console.log(dieResult);

  });

  //Point/buy system for attributes
  $(".points").click(function(event){
    event.preventDefault();

    if ($(this).val() === "strDecr" && player1.str > 0) {
      player1.str--;
      pointsToSpend++;
    } else if ($(this).val() === "strIncr") {
      player1.str++;
      pointsToSpend--;
    } else if ($(this).val() === "dexDecr" && player1.dex > 0) {
      pointsToSpend++;
      player1.dex--;
    } else if ($(this).val() === "dexIncr") {
      pointsToSpend--;
      player1.dex++;
    } else if ($(this).val() === "conDecr" && player1.con > 0) {
      pointsToSpend++;
      player1.con--;
    } else if ($(this).val() === "conIncr") {
      pointsToSpend--;
      player1.con++;
    } else if ($(this).val() === "intDecr" && player1.int > 0) {
      pointsToSpend++;
      player1.int--;
    } else if ($(this).val() === "intIncr") {
      pointsToSpend--;
      player1.int++;
    } else if ($(this).val() === "wisDecr" && player1.wis > 0) {
      pointsToSpend++;
      player1.wis--;
    } else if ($(this).val() === "wisIncr") {
      pointsToSpend--;
      player1.wis++;
    } else if ($(this).val() === "ismaDecr" && player1.isma > 0) {
      pointsToSpend++;
      player1.isma--;
    } else if ($(this).val() === "ismaIncr") {
      pointsToSpend--;
      player1.isma++;
    }

    // Button disabling function
    if (pointsToSpend <= 0) {
      $(".increase").attr({disabled: true});
    }
    else {
      $(".increase").attr({disabled: false});
    }

    // Attributes available for adjustment
    $("#attributePoints1").text(player1.str);
    $("#attributePoints2").text(player1.dex);
    $("#attributePoints3").text(player1.con);
    $("#attributePoints4").text(player1.int);
    $("#attributePoints5").text(player1.wis);
    $("#attributePoints6").text(player1.isma);

    // console log
    console.log("pointsToSpend " + pointsToSpend);

  });
});
