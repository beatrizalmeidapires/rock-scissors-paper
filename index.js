let randomNumber = (Math.floor(Math.random() * 3) + 1);
let score = 0;


//displays the rules.
$(".rules-button").click(function() {
  $(".rules-image").toggle();
});

//displays the rules.
$(".reset-button").click(function() {
  score = 0;
  $(".score-number").text(score);
});

//replaces the image with the one chosen by the player.
$(".rock-button").click(function(randomNumber) {
  randomNumber = (Math.floor(Math.random() * 3) + 1);
  $(".player-image").attr("src", "images/icon-rock.svg");
  start(randomNumber);
});

//replaces the image with the one chosen by the player.
$(".paper-button").click(function(randomNumber) {
  randomNumber = (Math.floor(Math.random() * 3) + 1);
  $(".player-image").attr("src", "images/icon-paper.svg");
  start(randomNumber);
});

//replaces the image with the one chosen by the player.
$(".scissors-button").click(function(randomNumber) {
  randomNumber = (Math.floor(Math.random() * 3) + 1);
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
  $(".attribution").show();
});

//starts the game.
function start(randomNumber){
  $(".hands-container").hide();
  $(".rules-container").hide();
  $(".attribution").hide();
  getComputerChoice(randomNumber);
  $("h4").show();
  $(".person-side").show();
  setTimeout(function(){ $(".computer-side").show(); }, 3000);
  setTimeout(function(){ checkWinner(); }, 4000);
  setTimeout(function(){ $(".text").show(); }, 4500);
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
    score++;
    $("h1.result").text("YOU WIN");
    $(".score-number").text(score);
  }

  else if (playerWord === "rock" && computerWord === "scissors"){
    score++;
    $("h1.result").text("YOU WIN");
    $(".score-number").text(score);
  }

  else if (playerWord === "scissors" && computerWord === "paper"){
    score++;
    $("h1.result").text("YOU WIN");
    $(".score-number").text(score);
  }

  else if(playerWord === "scissors" && computerWord === "scissors" || playerWord === "rock" && computerWord === "rock" || playerWord === "paper" && computerWord === "paper" ){
    $("h1.result").text("TIE");
    $(".score-number").text(score);
  }

  else {
    $("h1.result").text("YOU LOSE");
    $(".score-number").text(score);
  }
}
