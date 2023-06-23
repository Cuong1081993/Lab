const inputGuess = document.querySelector(".guess");
const btncheck = document.querySelector(".btn-check");
const messageE1 = document.querySelector(".message");
const scoreE1 = document.querySelector(".score");
const highscoreE1 = document.querySelector(".highScore");
const btnAgain = document.querySelector(".btn-again");
const number = document.querySelector(".number");

let score = 20;
let highScore = 0;

let secretNumber = parseInt(Math.random() * 10 + 1);

btncheck.addEventListener("click", function () {
  const guess = parseInt(inputGuess.value);
  if (isNaN(guess)) {
    // no number found input
    messageE1.textContent = `No Number`;
    //if number is match
  } else if (guess === secretNumber) {
    messageE1.textContent = `Correct Number`;

    number.textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
  }

  if (highScore < score) {
    highScore = score;
    highscoreE1.textContent = score;
  }
  //if doest not match
  else if (guess != secretNumber) {
    score--;
    messageE1.textContent = `InCorrect Number`;
    if(score>0){
        scoreE1.textContent = score;
        messageE1.textContent = guess > secretNumber ? `To high` : `To Low`;

    }else{
        messageE1.textContent = `You lose`;
        scoreE1.textContent= 0;
    }
  }
});
