window.onload = function() {
  /* Main JS */

  // things to keep track of
  // number of passes
  // number of answers done correctly
  // show review at the end of each turn?
  // Timer! Countdown                                                       DONE
  // options to change - countdown timer, THEME!!!! big one.
  // Where players are - their counter piece on a board

  // Start Button
  startButton.addEventListener("click", round); // test can you add multiple functions to this?

  // Round Begins
function round() {
  timer.innerHTML = "Go!";
  setInterval(innerStopWatch, 1000);

  // Generate Word to Describe
  var objectLengthForRand = object.length;
  var rando = Math.floor(Math.random() * objectLengthForRand);
  var randomObject = object[rando];
  word.innerHTML = `Describe: ${randomObject}`;
  object.splice(rando, 1);

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
    if(object.length == 0) {
      alert("You've run out of options! Oops");
      return;
    } else {
      var objectLengthForRand = object.length - 1;
      var rando = Math.floor(Math.random() * objectLengthForRand);
      var randomObject = object[rando];
      word.innerHTML = `Describe: ${randomObject}`;
      object.splice(rando, 1);
      score++;
    }
  }
  function passedWord() {
    if(object.length == 0) {
      alert("You've run out of options! Oops");
      return;
    } else {
      if(noOfPasses == 3) {
        alert("You have no more passes")
        return;
      } else {
        var objectLengthForRand = object.length - 1;
        var rando = Math.floor(Math.random() * objectLengthForRand);
        var randomObject = object[rando];
        word.innerHTML = `Describe: ${randomObject}`;
        object.splice(rando, 1);
        noOfPasses++;
      }
    }
  }















}
