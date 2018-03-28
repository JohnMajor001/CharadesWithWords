window.onload = function() {
  /* Main JS */

  // things to keep track of
  // number of passes
  // number of answers done correctly
  // show review at the end of each turn?
  // Timer! Countdown                                                       DONE
  // options to change - countdown timer, THEME!!!! big one.
  // Where players are - their counter piece on a board
  startButton.addEventListener("click", round); // test can you add multiple functions to this?
function round() {
  timer.innerHTML = "Go!";
  setInterval(innerStopWatch, 1000);
  gotIt.innerHTML = "<button class='button' id='correctAnswer'>Got it!</button>";
  pass.innerHTML = "<button class='button' id='passed'>Pass</button>";
  var correctAnswer = document.getElementById('correctAnswer');
  var passed = document.getElementById('passed');
  correctAnswer.addEventListener("click", correctlyAnswered);
  passed.addEventListener("click", passedWord);
  }
  function innerStopWatch() {
    if(numberForTimer == 0) {
      timer.innerHTML = timesUpMessage;
      return;
    } else {
      timer.innerHTML = numberForTimer;
      numberForTimer--;
    }
  }
  function correctlyAnswered() {
    alert("hi there!");
  }
  function passedWord() {
    alert("hi there!");
  }















}
