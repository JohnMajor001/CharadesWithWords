// Right Before Round Begins
function roundPrep(team) {
  document.getElementById('topTitle').className = 'hidden';
  readyBtn.addEventListener('click', countIn);
  var heading = document.createElement('div');
  heading.className = 'roundTextContainer';
  var body = `<span class='roundText'><t class='teamColor'>${team.name}</t>, it's your round.</span><br />
              <span class='roundText'><t class='describerColor'>
              ${team.players[(team.whichPlayersTurn)%team.players.length]}</t>, you're describing.</span><br />
              <span class='roundText'>Your category is <t class='categoryColor'>${categories[((team.position - 1)%categories.length)].name}</t></span>`;
  heading.innerHTML = body;
  list.appendChild(heading);
  if(document.getElementById('passBtn')) {
    document.getElementById('passBtn').parentNode.removeChild(document.getElementById('passBtn'));
  }

}

// 3 2 1 Animation
function countIn() {
  readyBtn.className = 'hidden';
  rulesBtn.className = 'hidden';

  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  var countInHTML = `<span class='num one'>3</span>
                    <span class='num two'>2</span>
                    <span class='num three'>1</span>
                    <span class='num Go'>Go!</span>`;
  list.innerHTML = countInHTML;
  setTimeout(roundBegins, 4000);
  readyBtn.removeEventListener('click', countIn);
}

function roundBegins() {
	//clear Board
	while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
  readyBtn.className = 'btn initialBtn';
  rulesBtn.className = 'btn initialBtn';
  // Create New Board
  var timerHtml = `<h1 id='timerNumbers'>${timer}</h1>`;
  var timerSection = document.createElement('div');
  timerSection.innerHTML = timerHtml;
  list.appendChild(timerSection);
  var passButtonHtml = `<button class="btn" id='passBtn'>Pass</button>`;
  var gameDiv = document.createElement('div');
  gameDiv.className = 'describeText';
  gameDiv.innerHTML = `<span id='youMustDescribe'>Describe:</span><br />
  						         <span id='spanWithWordToDescribe'></span><br />`;
  list.appendChild(gameDiv);
  readyBtn.innerHTML = 'Got it!';
  readyBtn.insertAdjacentHTML('afterend', passButtonHtml)
  readyBtn.removeEventListener('click', roundBegins);
  readyBtn.addEventListener('click', gotIt);
  var passBtn = document.getElementById('passBtn');
  passBtn.addEventListener('click', passed);
  // Finding which array to use
  var currentTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];
  var checkPosition = (currentTeam.position - 1)%categories.length;
  var catToUse = categories[checkPosition];

  // Check if array needs to be repopulated
  var backUpArray = backUpCategories[checkPosition];
    if(catToUse.array.length == 2) {
      for(i = 0; i < backUpArray.length; i++) {
        catToUse.array.push(backUpArray[i]);
        }
      }

  var randomIndex = Math.floor(Math.random() * catToUse.array.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
  var word = catToUse.array[randomIndex];
  var wordBox = document.getElementById('spanWithWordToDescribe');
  wordBox.innerHTML = word;


  // Start Timer
  t = timer - 1;
  var timeLength = timer * 1000;
  function updateCountdown() {
    var countDownNumbers = document.getElementById('timerNumbers');
    countDownNumbers.innerHTML = t;
    t--;
  }
    var stopWatchHere = setInterval(updateCountdown, 1000);
    function stopUpdating() {
      clearInterval(stopWatchHere);
      roundEnds();
    }
    setTimeout(stopUpdating, timeLength);
}

function roundEnds() {
     //clear Board
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Get current information
  var currentTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];
  // increment position
  currentTeam.position += currentTeam.score;
  // display stats
  var checkPosition = (currentTeam.position - 1)%categories.length;
  var catToUse = categories[checkPosition];
  var table = document.createElement('table');
  table.className = 'statsTable';
  var stats = `<tr>
                  <th>Team</th>
                  <td>${currentTeam.name}</td>
                </tr>
                <tr>
                  <th>Got \'Em</th>
                  <td>${wordsSuccessfullyDescribed}</td>
                </tr>
                <tr>
                  <th>Round Score</th>
                  <td>${currentTeam.score}</td>
                </tr>
                <tr>
                  <th>Total Score</th>
                  <td>${currentTeam.position - 1}</td>
                </tr>
                  <th>Next Category</th>
                  <td>${catToUse.name}</td>`;
    table.innerHTML = stats;
    list.appendChild(table);
  // Change buttons
var mistakesWereMade = document.getElementById('passBtn');
mistakesWereMade.removeEventListener('click', passed);
mistakesWereMade.addEventListener('click', mistakes);
mistakesWereMade.innerHTML = 'Help';

readyBtn.innerHTML = 'Next Round';
readyBtn.removeEventListener('click', gotIt);
readyBtn.addEventListener('click', leadToRoundPrep);

  // LATER ON Create button for editing in case mistakes/cheating
  return;
}

function gotIt() {
  readyBtn.removeEventListener('click', gotIt);
  var wordBox = document.getElementById('spanWithWordToDescribe');
  var currentWord = wordBox.innerHTML;
  var currentTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];       // Add Modulus logic here similar to below?
  var checkPosition = (currentTeam.position - 1)%categories.length;
  var catToUse = categories[checkPosition];
  var indexOfCurrentWord = catToUse.array.indexOf(`${currentWord}`);
  wordsSuccessfullyDescribed.push(currentWord);
  catToUse.array.splice(indexOfCurrentWord, 1);

  // Check if array needs to be repopulated
  var backUpArray = backUpCategories[checkPosition];
  if(catToUse.array.length == 2) {
    for(i = 0; i < backUpArray.length; i++) {
      catToUse.array.push(backUpArray[i]);
      }
    }

  var randomIndex = Math.floor(Math.random() * catToUse.array.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
  var newWord = catToUse.array[randomIndex];

  wordBox.innerHTML = newWord;
  currentTeam.score++;
  setTimeout(function() {
    readyBtn.addEventListener('click', gotIt);
  }, 600);
}



function passed() {
  document.getElementById('passBtn').removeEventListener('click', passed);
var currentTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];
  if(currentTeam.passesUsed == maximumPasses) {
    alert('No more passes this round');           // This will need to be changed to something that looks better
    return;
  } else {
    var wordBox = document.getElementById('spanWithWordToDescribe');
    var currentWord = wordBox.innerHTML;
    var checkPosition = (currentTeam.position - 1)%categories.length;
    var catToUse = categories[checkPosition];
    var indexOfCurrentWord = catToUse.array.indexOf(`${currentWord}`);
    catToUse.array.splice(indexOfCurrentWord, 1);

     // Check if array needs to be repopulated
  var backUpArray = backUpCategories[checkPosition];
  if(catToUse.array.length == 2) {
    for(i = 0; i < backUpArray.length; i++) {
      catToUse.array.push(backUpArray[i]);
      }
    }

    var randomIndex = Math.floor(Math.random() * catToUse.array.length); // IF UNDEFINED EVER APPEARS IN DESCRIBE BOX, ADD A MINUS 1 HERE
    var newWord = catToUse.array[randomIndex];
    wordBox.innerHTML = newWord;
    currentTeam.passesUsed++;

    setTimeout(function() {
    document.getElementById('passBtn').removeEventListener('click', passed);
  }, 600);
    
  }
}
function mistakes() {
  alert('This app is so bad and John is so lazy that this button doesn\'t even do anything');
}
function leadToRoundPrep() {
  //clear Board
while(list.firstChild) {
 list.removeChild(list.firstChild);
}

  // empty wordsSuccessfullyDescribed array
  var currentTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];
  currentTeam.whichPlayersTurn += 1;
  currentTeam.score = 0;
  currentTeam.roundsPlayed += 1;
  wordsSuccessfullyDescribed.length = 0;
  readyBtn.removeEventListener('click', leadToRoundPrep);
  if(currentTeam.position - 1 >= toWin) {
    /* checks if Team won and if so
                  creates final page with breakdown of game stats,
                  buttons that will return all variables to normal
                  brings back to initial screen
    */
    // load winning screen
    var winners = document.createElement('table');
    winners.className = 'finalTable';
    var winnersText = `<h1>And the Winners are...<br />
                      ${currentTeam.name}!</h1>`;
    
    // Need a for loop to create table?
      var finalTableTopRow = `<tr>          
                        <th>Teams</th>
                        <th>Final Scores</th>
                        <th>Average Score per Round</th>
                      </tr>`;
      var finalTableBottomStructure;
      for(let q = 0; q < teamObjectsArray.length; q++) {
         finalTableBottomStructure += `<tr>
                                        <td>${teamObjectsArray[q].name}</td>
                                        <td>${teamObjectsArray[q].position - 1}</td>
                                        <td>${(teamObjectsArray[q].position - 1)/teamObjectsArray[q].roundsPlayed}</td>
                                        </tr>`;
      }
      var finalTable = finalTableTopRow + finalTableBottomStructure;
      winners.innerHTML = winnersText + finalTable;
      list.appendChild(winners);


  readyBtn.addEventListener('click', homePage);
  readyBtn.innerHTML = 'Home';
  return;
} else {
  whichTeamPlays += 1;
  var newTeam = teamObjectsArray[whichTeamPlays%teamObjectsArray.length];
  roundPrep(newTeam);
  }
}
function homePage() {
  alert('Yeah this doesn\'t do anything either');
  alert('You should fix that');
  // reset game
}
