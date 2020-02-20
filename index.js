let randomNumber = (Math.floor(Math.random() * 3) + 1);

//displays the rules.
$(".rules-button").click(function() {
  $(".rules-image").toggle();
  $("body").animate({opacity: 0.5})
});

//replaces the image with the one chosen by the player.
$(".rock-button").click(function(randomNumber) {
  $(".player-image").attr("src", "images/icon-rock.svg");
  start(randomNumber);
});

//replaces the image with the one chosen by the player.
$(".paper-button").click(function(randomNumber) {
  $(".player-image").attr("src", "images/icon-paper.svg");
  start(randomNumber);
});

//replaces the image with the one chosen by the player.
$(".scissors-button").click(function(randomNumber) {
  $(".player-image").attr("src", "images/icon-scissors.svg");
  start(randomNumber);
});

//reacts to clicks on the play-again button
$(".play-again-button").click(function(){
  $(".text").hide();
  $(".computer-side").hide();
  $(".person-side").hide();
  $("h4").hide();
  $(".hands-container").show();
  $(".rules-container").show();
});

//starts the game.
function start(randomNumber){
  $(".hands-container").hide();
  $(".rules-container").hide();
  getComputerChoice(randomNumber);
  $(".computer-side").show();
  $(".person-side").show();
  checkWinner();
  $("h4").show();
  $(".text").show();
}

//generates a random number for the computer.
function getComputerChoice(randomNumber){
  if(randomNumber === 1){
    $(".computer-image").attr("src", "images/icon-rock.svg");
  } else if (randomNumber === 2){
    $(".computer-image").attr("src", "images/icon-paper.svg");
  } else {
    $(".computer-image").attr("src", "images/icon-scissors.svg");
  }
}

function checkWinner(){
  let playerChoice = $(".player-image").attr("src");
  let playerWord = playerChoice.substring(12, playerChoice.length - 4);

  let computerChoice = $(".computer-image").attr("src");
  let computerWord = computerChoice.substring(12, computerChoice.length - 4 );

  if(playerWord === "paper"  && computerWord === "rock"){
    $("h1.result").text("YOU WIN");
  }

  else if (playerWord === "rock" && computerWord === "scissors"){
    $("h1.result").text("YOU WIN");
  }

  else if (playerWord === "scissors" && computerWord === "paper"){
    $("h1.result").text("YOU WIN");
  }

  else if(playerWord === "scissors" && computerWord === "scissors" || playerWord === "rock" && computerWord === "rock" || playerWord === "paper" && computerWord === "paper" ){
    $("h1.result").text("THERE'S A TIE");
  }

  else {
    $("h1.result").text("COMPUTER WINS");
  }
}
