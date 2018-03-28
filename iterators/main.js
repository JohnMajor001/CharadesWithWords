window.onload = function() {
  /* Main JS */
  // VARIABLES
  var object = ["Cane", "Kite", "Computer", "Television", "Car"];
  var game = document.getElementById('game');
  var word = document.getElementById('wordToDescribe');
  var timer = document.getElementById('timer');
  var startButton = document.getElementById('start');
  var count = 0;
  var numberForTimer = 30;
  var timesUpMessage = "Time's up!";
  // things to keep track of
  // number of passes
  // number of answers done correctly
  // show review at the end of each turn?
  // Timer! Countdown
  // options to change - countdown timer, THEME!!!! big one.
  // Where players are - like their counter piece on a board
  startButton.addEventListener("click", stopWatch); // test can you add multiple functions to this?
function stopWatch() {
  timer.innerHTML = "Go!";
  setInterval(innerStopWatch, 1000);
  }
  function innerStopWatch() {
    if(count == 30) {
      timer.innerHTML = timesUpMessage;
      return;
    } else {
      timer.innerHTML = numberForTimer;
      count++;
      numberForTimer--;
    }
  }















}
