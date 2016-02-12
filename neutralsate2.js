alert ("my javascript works!")

$(document).ready(function() {

   $('.box').mouseenter(function() {     // animation area
      $(this).fadeTo(1000, 1);
      $(this).animate({
           height: '+=50px'

       });
   });
   $('.box').mouseleave(function() {
       $(this).fadeTo(1000, 0.65);
       $(this).animate({
        height: '-=50px'

       });
   });

var user;
var computer;

  $('box').click(function(){              // start of the .click function
    user = this.id;

    computer = Math.random();
    if (computer <= 0.34) {
    computer = "aggressive";
    } else if(computer <= 0.67) {
    computer = "bribe";
    } else {
    computer = "influence";
    }

    var winner = compare(user,computer);
    console.log(winner);
    $('h1').html(winner.str);

}); // end of the click function

var compare = function(user, computer){
  var obj = {
    str: " ",
    ner: " "
  }
  var aggressive = "Your aggression has overpowered the neutral states polititians."
  var bribe = "You have paid for the loyalty of the armies of neutral state."
  var influence = "Your politatians are over corruptedness, your influence is worth more."
  var win = "You are victorious!"
  var lose = "You have lost"

  if (user === computer){
    obj.str = "The result is a tie.";
    obj.ner = "win";
    }
  else if (user === "aggressive"){
    if (computer ==="influence") {
      obj.str = aggressive + " " + win;
      obj.ner = "win";
    }
    else {
      obj.str = bribe + " " + lose;
      obj.ner = "lose";
    }
  }
  else if (user === "influence"){
    if (computer === "aggressive"){
      obj.str = influence + " " + win;
      obj.ner = "win";
    }
    else{
      obj.str = bribe + " " + lose;
      obj.ner = "lose";
    }
  }
  else if (user === "bribe"){
    if (computer === "aggressive"){
      obj.str = aggressive + " " + lose;
      obj.ner = "lose";
    }
    else{
      obj.str = bribe + " " + win;
      obj.ner = "win";
    }
  }

return obj;

}; // end of comapre function

}); // end of document.ready
