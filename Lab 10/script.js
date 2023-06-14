

btnAgain.addEventListener('click', function(){
  score = 20;
  secretNumber = parseInt(Math.random()* 20 + 1);

  inputGuess.value = "";
  messageE1.textContent= " Start guessing...";
  scoreE1.textContent = "20";
  numberE1.textContent = "?";
  document.body.style.background = "#222";
  numberE1.style.width = "15rem";
})