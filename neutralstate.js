alert ("my javascript works!")

$(document).ready(function() {

var computerChoice;
var userChoice;
var compare;
var result;

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
//computerChoice
//alert(event.target);
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

//userChoice
/*
var userChoice = function() {

if (event.target.id == document.getElementById('aggressive')) {
  userChoice = "aggressive"
}
else if (event.target.id == document.getElementById('bribe')) {
  userChoice = "bribe"
}
else {
  userChoice = "influence"
}
};  */

// End of compare function
var winner = compare(userChoice,computerChoice);

//convert array[0] to a string value
result.toString();

//write result into innerHTML

console.log(winner);
$('#answer').html(result)

//var writeresult = document.getElementById("answer");
//writeresult.innerHTML = result;

}); // end of click

// compare function that stores result into array [0]
var result = [];

var compare = function(choice1,choice2){
  if (choice1==choice2){
      result[0] = "You have tied and are at a standstill"
  }
  else if (choice1=="aggressive"){
      if (choice2=="influence"){
          result[0] = "agressive play wins"
      }
      else {
          result[0] = "A bribe wins"
      }
  }
  else if (choice1=="bribe"){
      if (choice2=="aggressive"){
          result[0] = "A bribe wins"
      }
      else{
          result[0] = "Influence wins"
      }
  }
  else if (choice1=="influence"){
      if (choice2=="aggressive"){
          result[0] = "Aggressive wins"
      }
      else{
          result[0] = "Influence wins"
      }
  }
}

/*
// End of compare function
compare(userChoice,computerChoice)

//convert array[0] to a string value
result.toString();

//write result into innerHTML

var writeresult = document.getElementById("answer");
writeresult.innerHTML = result;
*/
//alert(event.target);

});
