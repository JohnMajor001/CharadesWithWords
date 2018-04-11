// page loads with: what catagory is coming up - 
// do we have to change arrays into objects for this? So that categories is an array of objects?
//


// Right Before Round Begins
function roundPrep(team) {
  readyBtn.addEventListener('click', roundBegins);
  var heading = document.createElement('div');
  var body = `<span class='roundText'>${team.name}, it's your round.</span>
              <span class='roundText'>${team.players[team.whichPlayersTurn]}, you're describing.</span>
              <span class='roundText'>Your category is ${categories[(team.position%categories.length) - 1]} </span>`;
  heading.innerHTML = body;
  list.appendChild(heading);
}

function roundBegins() {
	//clear Board 
	while(list.firstChild) {
    list.removeChild(list.firstChild);
  } 
  // Create New Board
  var timerHtml = `<h1 id='timerNumbers'>Go!</h1>`;
  var timerSection = document.createElement('div');
  timerSection.innerHTML = timerHtml;
  list.appendChild(timerSection);
  var passButtonHtml = `<button class="btn" id='passBtn'>Pass</button>`;
  var gameDiv = document.createElement('div');
  gameDiv.innerHTML = `<span id='youMustDescribe'>Describe:</span>
  						         <span id='spanWithWordToDescribe'></span>`;
  list.appendChild(gameDiv);
  readyBtn.innerHTML = 'Got it!';
  readyBtn.insertAdjacentHTML('afterend', passButtonHtml)
  readyBtn.removeEventListener('click', roundBegins);
  readyBtn.addEventListener('click', gotIt);
  var passBtn = document.getElementById('passBtn');
  passBtn.addEventListener('click', passed);
  // Finding which array to use
  var currentTeam = teamObjectsArray[whichTeamPlays];
  var checkPosition = currentTeam.position%categories.length;
  var catToUse = categories[checkPosition - 1];
  var randomIndex = Math.floor(Math.random() * catToUse.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
  var word = catToUse[randomIndex];
  var wordBox = document.getElementById('spanWithWordToDescribe');
  wordBox.innerHTML = word;

  // Start Timer
  setInterval(countDown, 1000);
}
function countDown() {
  var countDownTimer = document.getElementById('timerNumbers');
  countDownTimer.innerHTML = `${timer}`;
	if(timer == 0) {
      countDownTimer.innerHTML = timesUpMessage;
      // THINK WE NEED TO PUT IN AN ENTIRE FUNCTION HERE TO GET THE GAME MOVING AGAIN
      return;
    } else {
      countDownTimer.innerHTML = timer;
      timer--;
    }

}
function gotIt() {
  var wordBox = document.getElementById('spanWithWordToDescribe');
  var currentWord = wordBox.innerHTML;
  var currentTeam = teamObjectsArray[whichTeamPlays];       // Add Modulus logic here similar to below?
  var checkPosition = currentTeam.position%categories.length;
  var catToUse = categories[checkPosition - 1];
  var indexOfCurrentWord = catToUse.indexOf(`${currentWord}`);
  catToUse.splice(indexOfCurrentWord, 1);
  var randomIndex = Math.floor(Math.random() * catToUse.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
  var newWord = catToUse[randomIndex];
  wordBox.innerHTML = newWord;
  currentTeam.score++;
}
function passed() {
var currentTeam = teamObjectsArray[whichTeamPlays];
  if(currentTeam.passesUsed == maximumPasses) {
    alert('No more passes this round');
    return;
  } else {
    var wordBox = document.getElementById('spanWithWordToDescribe');
    var currentWord = wordBox.innerHTML;
    var checkPosition = currentTeam.position%categories.length;
    var catToUse = categories[checkPosition - 1];
    var indexOfCurrentWord = catToUse.indexOf(`${currentWord}`);
    catToUse.splice(indexOfCurrentWord, 1);
    var randomIndex = Math.floor(Math.random() * catToUse.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
    var newWord = catToUse[randomIndex];
    wordBox.innerHTML = newWord;
    currentTeam.passesUsed++; 
  }
}