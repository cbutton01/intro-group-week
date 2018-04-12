//backend
function diceRoll(sides){
  roll = this.roll;
  roll  =  Math.floor(parseInt(Math.random() * (sides +1)));
  if(this.roll === 0){
    return diceRoll(sides);
  }
  return roll;
}

function Player(name, race, playerClass){ //player constructor
  this.name = name;
  this.race = race;
  this.playerClass = playerClass;
  this.skills = [];
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
    this.str += 2; this.con += 20;
  } else if(this.race.includes("halfling")){
    this.dex += 2;
  }

}

//Checks to see if a stat is above or below a certain number and add a modifier to the players roll
Player.prototype.strCheck = function(){
  if(this.str <= 1){
    roll -= 5;
  } else if (this.str >= 2 && this.str <= 3){
    roll -= 4;
  } else if (this.str >= 4 && this.str <= 5){
    roll -= 3;
  } else if (this.str >= 6 && this.str <= 7){
    roll -= 2;
  } else if (this.str >= 8 && this.str <= 9){
    roll -= 1;
  } else if (this.str >= 12 && this.str <= 13){
    roll += 1;
  } else if (this.str >= 14 && this.str <= 15){
    roll += 2;
  } else if (this.str >= 16 && this.str <= 17){
    roll += 3;
  } else if (this.str > 17){
    roll += 4;
  }
}

Player.prototype.dexCheck = function(){
  if(this.dex <= 1){
    roll -= 5;
  } else if (this.dex >= 2 && this.dex <= 3){
    roll -= 4;
  } else if (this.dex >= 4 && this.dex <= 5){
    roll -= 3;
  } else if (this.dex >= 6 && this.dex <= 7){
    roll -= 2;
  } else if (this.dex >= 8 && this.dex <= 9){
    roll -= 1;
  } else if (this.dex >= 12 && this.dex <= 13){
    roll += 1;
  } else if (this.dex >= 14 && this.dex <= 15){
    roll += 2;
  } else if (this.dex >= 16 && this.dex <= 17){
    roll += 3;
  } else if (this.dex > 17){
    roll += 4;
  }
}

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
  } else if (this.int > 17){
    roll += 4;
  }
}

Player.prototype.conCheck = function(){
  if(this.con <= 1){
    roll -= 5;
  } else if (this.con >= 2 && this.con <= 3){
    roll -= 4;
  } else if (this.con >= 4 && this.con <= 5){
    roll -= 3;
  } else if (this.con >= 6 && this.con <= 7){
    roll -= 2;
  } else if (this.con >= 8 && this.con <= 9){
    roll -= 1;
  } else if (this.con >= 12 && this.con <= 13){
    roll += 1;
  } else if (this.con >= 14 && this.con <= 15){
    roll += 2;
  } else if (this.con >= 16 && this.con <= 17){
    roll += 3;
  } else if (this.con > 17){
    roll += 4;
  }
}

Player.prototype.wisCheck = function(){
  if(this.wis <= 1){
    roll -= 5;
  } else if (this.wis >= 2 && this.wis <= 3){
    roll -= 4;
  } else if (this.wis >= 4 && this.wis <= 5){
    roll -= 3;
  } else if (this.wis >= 6 && this.wis <= 7){
    roll -= 2;
  } else if (this.wis >= 8 && this.wis <= 9){
    roll -= 1;
  } else if (this.wis >= 12 && this.wis <= 13){
    roll += 1;
  } else if (this.wis >= 14 && this.wis <= 15){
    roll += 2;
  } else if (this.wis >= 16 && this.wis <= 17){
    roll += 3;
  } else if (this.wis > 17){
    roll += 4;
  }
}

Player.prototype.ismaCheck = function(){
  if(this.isma <= 1){
    roll -= 5;
  } else if (this.isma >= 2 && this.isma <= 3){
    roll -= 4;
  } else if (this.isma >= 4 && this.isma <= 5){
    roll -= 3;
  } else if (this.isma >= 6 && this.isma <= 7){
    roll -= 2;
  } else if (this.isma >= 8 && this.isma <= 9){
    roll -= 1;
  } else if (this.isma >= 12 && this.isma <= 13){
    roll += 1;
  } else if (this.isma >= 14 && this.isma <= 15){
    roll += 2;
  } else if (this.isma >= 16 && this.isma <= 17){
    roll += 3;
  } else if (this.isma > 17){
    roll += 4;
  }
}

var player1 = new Player(name);
//front end
$(document).ready(function(){
  $("#attributePoints1").text(player1.str);
  $("#attributePoints2").text(player1.dex);
  $("#attributePoints3").text(player1.con);
  $("#attributePoints4").text(player1.int);
  $("#attributePoints5").text(player1.wis);
  $("#attributePoints6").text(player1.isma);
  var pointsToSpend = 10;
  var skillsToSpend = 2;
  $("#attPoints").text(pointsToSpend);
  $(".wizard").hide();
  $(".fighter").hide();
  $(".ranger").hide();
  $(".rogue").hide();
  if(pointsToSpend > 0){
    $("#toHide").attr({disabled: true});
  }

  // $('.D20').click(function(event){
  //   event.preventDefault();
  //   var dice = parseInt($('.D20').val());
  //   var dieResult = diceRoll(dice);
  //   $('.output').text(dieResult);
  //   console.log(dieResult);
  // });

  $(".stealthD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".stealthD20").val());
    var dieResult = diceRoll(dice);
    if($(".stealth").is(":checked")){
      roll += 2;
      player1.dexCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.dexCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".perfD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".perfD20").val());
    var dieResult = diceRoll(dice);
    if($(".performance").is(":checked")){
      roll += 2;
      player1.ismaCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.ismaCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".insD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".insD20").val());
    var dieResult = diceRoll(dice);
    if($(".insight").is(":checked")){
      roll += 2;
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".arcD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".arcD20").val());
    var dieResult = diceRoll(dice);
    if($(".arcana").is(":checked")){
      roll += 2;
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".medD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".medD20").val());
    var dieResult = diceRoll(dice);
    if($(".medicine").is(":checked")){
      roll += 2;
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".relD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".relD20").val());
    var dieResult = diceRoll(dice);
    if($(".religion").is(":checked")){
      roll += 2;
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".invD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".invD20").val());
    var dieResult = diceRoll(dice);
    if($(".investigation").is(":checked")){
      roll += 2;
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".natureD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".natureD20").val());
    var dieResult = diceRoll(dice);
    if($(".nature").is(":checked")){
      roll += 2;
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.intCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".survD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".survD20").val());
    var dieResult = diceRoll(dice);
    if($(".survival").is(":checked")){
      roll += 2;
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.wisCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".athD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".athD20").val());
    var dieResult = diceRoll(dice);
    if($(".athletics").is(":checked")){
      roll += 2;
      player1.strCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.strCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".intD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".intD20").val());
    var dieResult = diceRoll(dice);
    if($(".intimidation").is(":checked")){
      roll += 2;
      player1.ismaCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.ismaCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
  });

  $(".percD20").click(function(event){
    event.preventDefault();
    var dice = parseInt($(".percD20").val());
    var dieResult = diceRoll(dice);
    if($(".perception").is(":checked")){
      roll += 2;
      player1.conCheck();
      $(".output").text(roll);
      console.log(dieResult);
    } else {
      player1.conCheck();
      $(".output").text(roll);
      console.log(dieResult);
    }
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
    $("#attPoints").text(pointsToSpend);
    // console log
    console.log(pointsToSpend);

  });

    $("#statConfirm").click(function(){
      if(pointsToSpend === 0){
        $("#toHide").attr({disabled: false});
      }
    });

    $(".skillBox").click(function(event){
      if ($(this).is(":not(:checked)")) {
        skillsToSpend++;

      }
      if($(this).is(':checked') && skillsToSpend > 0){
        skillsToSpend--;
      }
      if(skillsToSpend === 0){
        $('[name=skills]:not(:checked)').attr({disabled: true});
      } else if(skillsToSpend > 0){
        $('[name=skills]:not(:checked)').attr({disabled: false});
      }
      console.log(skillsToSpend);
  })
  $("#char-sheet").submit(function(event){
    event.preventDefault();
    $('#toHide').hide();
    player1.name = $("#playerName").val();
    $("#playerName").attr({disabled: true});
    player1.race = $("#race-select").val();
    player1.playerClass = $("#class-select").val();
    player1.raceCheck();
    if(player1.playerClass.includes("rogue")){
      $(".rogue").show();
    } else if(player1.playerClass.includes("wizard")){
      $(".wizard").show();
    } else if(player1.playerClass.includes("fighter")){
      $(".fighter").show();
    } else if(player1.playerClass.includes("ranger")){
      $(".ranger").show();

    }

    if (player1.race.includes("human")) {
      $("#humanLore").show();
    } else if (player1.race.includes("dwarf")) {
      $("#dwarfLore").show();
    } else if (player1.race.includes("elf")) {
      $("#elfLore").show();
    } else if (player1.race.includes("halfling")){
      $("#halflingLore").show();
    }

    $("#attributePoints1").text(player1.str);
    $("#attributePoints2").text(player1.dex);
    $("#attributePoints3").text(player1.con);
    $("#attributePoints4").text(player1.int);
    $("#attributePoints5").text(player1.wis);
    $("#attributePoints6").text(player1.isma);
    $("#attPoints").text(pointsToSpend);
  });

  $("#confirmSkill").click(function(){
    if("[name:skills]:checked" && skillsToSpend === 0){
      $(".skillBox").hide();
      $("#rollButtons button").show();
    }
  });
});
