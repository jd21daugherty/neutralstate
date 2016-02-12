alert ("my javascript works!")

$(document).ready(function() {

var computerChoice;
var userChoice;
var compare;
var result = [];

var compare = function(choice1,choice2){
  if (choice1==choice2){
      result = "You have tied and are at a standstill"
  }
  else if (choice1=="aggressive"){
      if (choice2=="influence"){
          result = "agressive play wins"
      }
      else {
          result = "A bribe wins"
      }
  }
  else if (choice1=="bribe"){
      if (choice2=="aggressive"){
          result = "A bribe wins"
      }
      else{
          result = "Influence wins"
      }
  }
  else if (choice1=="influence"){
      if (choice2=="aggressive"){
          result = "Aggressive wins"
      }
      else{
          result = "Influence wins"
      }
  }
}

  $('.box').mouseenter(function() {
      $(this).animate({
           height: '+=50px',
           opacity: 1,
       });
   });
   $('.box').mouseleave(function() {
       $(this).animate({
        height: '-=50px',
        opacity: 0.65,
       });
   });

$('.box').click(function() {
//beginning of click function

userChoice = this.id;

var computerChoice = Math.random(function(){
if (computerChoice < 0.34) {
computerChoice = "aggressive";
} else if(computerChoice <= 0.67) {
computerChoice = "bribe";
} else {
computerChoice = "influence";
}
});



// End of compare function
var winner = compare(userChoice,computerChoice);

//convert array to a string value
result.toString();



console.log(winner);
$('#answer').html(result)



}); // end of click



}); // end of document ready
