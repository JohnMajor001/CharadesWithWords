var noOfTeams = 0;
var noOfPlayers = 0;
var addItemBtn = document.getElementById('addItemBtn');
var list = document.getElementById('list');
var readyBtn = document.getElementById('readyBtn');
var teamNamesArray = [];
var playerNamesArray = [];
var teamObjectsArray = [];

// THINGS I ADDED!!!
var maximumPasses = 3; // Only Useful really when settings page is created
var timesUpMessage = "Time's up!";
var whichTeamPlays = 0;
var timer = 30;
var categories = [];
// JUST FOR TEST PURPOSES, WILL NEED TO CHANGE WHEN SETTINGS PAGE COMES IN


var objects = ['Fork', 'Knife', 'Plate', 'Glass', 'Spyglass',
			 'Keyboard', 'Television Set', 'Mobile Phone', 'Sexton', 'Key Fob', 'Printer', 
			 'Bathtub', 'Shower', 'Boiler Plate', 'Knob', 'Handle', 'Nail', 'Hammer', 'Wrench', 
			 'Screwdriver', 'Remote Control', 'Button', 'Rubbish bag', 'Towel', 'Bath Robe',
			 'Bathing suit', 'Boxer Shorts', 'Underpants', 'Knitwear', 'Jumper', 'Jar', 'Envelope', 
			 'Bottle', 'Cheese Grater', 'Drawer', 'Tube', 'Box', 'Card', 'Bag', 'Handbag', 'Cowboy Boots',
			 'Leopard-print Trousers', 'Lamp Shade', 'Turntable', 'Flute', 'Guitar Case', 'SuitCase', 
			 'Saucepan', 'Pot', 'Mug', 'Lazy Susan', 'Shuttlecock', 'Tennis Ball', 'Piano', 'Surfboard',
			 'Sponge', 'Tin Can', 'Magazine', 'Newspaper', 'Catalogue', 'Tissuebox', 'Wallet',
			 'Jewellery Box', 'Water Jug', 'Lanturn', 'Lightbulb', 'Switch', 'Pad', 'Blackboard',
			 'Floppy Disk', 'Standing Mirror', 'Pouch', 'Cafeteria Tray', 'Book', 'fan', 'Mute',
			 'Key-ring', 'Soap Dispenser', 'Shopping Trolley', 'Umbrella', 'Cane', 'Optical Lenses',
			 'Bicycle', 'Dial', 'Tape Recorder', 'Mp3 Player', 'Walkman', 'Thermos', 'Notepad', 'Door Mat',
			 'Nailbrush', 'Toothbrush', 'Broom', 'Scissors', 'Tupperware Container', 'WhiteBoard',
			 'Golf Club', 'Golf Ball', 'Blade', 'Sword', 'Swiss Army Knife', 'Filter', 'Nozzle', 'Matchstick', 
			 'Hair Dryer'];
var actions = ['Juggling', 'Walking', 'Running', 'Sprinting', 'Debating', 'Killing', 'Murdering', 'Slaughtering', 'Destroying', 
				'Swapping', 'Distracting', 'Playing', 'Disposing', 'Negotiating', 'Eating', 'Following', 'Jingling', 'Returning', 
				'Standing', 'Sleeping', 'Branding', 'Meeting', 'Dreaming', 'Singing', 'Waking', 'Loving', 'Skipping', 'Rhyming',
				'Chasing', 'Shadowing', 'Stalking', 'Going', 'Leaving', 'Exiting', 'Mourning', 'Disappearing', 'Calling', 
				'Reaching', 'Hopping', 'Waving', 'Circling', 'Driving', 'Laughing', 'Making', 'Hiding', 'Looking', 'Courting',
				'Humming', 'Holding', 'Counting', 'Numbering', 'Dancing', 'Lying', 'Questioning', 'Reversing', 'Tailing', 
				'Theorising', 'Coding', 'Starting', 'Beginning', 'Ending', 'Trying', 'Recording', 'Pouring', 'Scattering'];
var Nature = ['Cat', 'Dog', 'Birds', 'Butterfly'];
categories.push(objects);
categories.push(actions);
categories.push(Nature);

/*function team(playerNames, numberOfPlayers, score, position) {
  this.playerNames = playerNames;
  this.numberOfPlayers = numberOfPlayers;
  this.score = score;
  this.position = position;
}*/



// Things to do!
/* Make Team Name Box bigger
      Put 'X' at side of each third player box to deleteBtn
      do the same for team actually*/

// Organise arrays of player Names in accordance with relevant Team Names
