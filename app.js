const computerArray = ['rock', 'paper', 'scissors'];
function computerPlay() {
	return computerArray[~~(Math.random() * computerArray.length)];
}
let userScore = 0;
let computerScore = 0;

function addPointUser() {
	userScore = userScore + 1;
}

function addPointComputer() {
	computerScore = computerScore + 1;
}

function playRound() {
	// User fills playerChoice variable with their play
	let playerChoice = prompt('Please enter Rock, Paper, or Scissors.');
	if (playerChoice) {
		// user trim function to change entry to lower case
		let playerChose = playerChoice.trim().toLowerCase();
		// check if playerChoice is any of the acceptable entries
		console.log("User Played " + playerChose);
		if (playerChose === 'rock' || playerChose === 'paper' ||
			playerChose === 'scissors') {
			let computerChose = computerPlay();
			console.log("Computer played " + computerChose);
			// Find Tie Condition
			if (computerChose === playerChose) {
				alert("It's a tie!");
				addPointComputer();
				addPointUser();
				// Paper covers rock options
			} else (computerChose != playerChose);
			if (computerChose === 'paper' && playerChose === 'rock') {
				alert('Computer wins, Paper covers rock.');
				addPointComputer();
			} else if (computerChose === 'rock' && playerChose === 'paper') {
				alert('User wins, Paper Covers Rock.');
				addPointUser();
				// Rock Breaks scissors options
			} else if (computerChose === 'rock' && playerChose === 'scissors') {
				alert('Computer wins, Rock breaks Scissors.');
				addPointComputer();
			} else if (computerChose === 'scissors' && playerChose === 'rock') {
				alert('User wins, Rock breaks Scissors.');
				addPointUser();
				// Scissors cut Paper Options
			} else if (computerChose === 'scissors' && playerChose === 'paper') {
				alert('Computer wins, Scissors cut paper.');
				addPointComputer();
			} else if (computerChose === 'paper' && playerChose === 'scissors') {
				alert('User wins, Scissors cut paper.');
				addPointUser();
			}
		} else {
			alert('Incorrect Entry, Round Forfeited');
			addPointComputer();
		}
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		playRound();
	}
}



// Show a confirm dialogue allowing user to consent to play.
let startRound = confirm('Rock, Paper, or Scissors?');
// If startRound is accepted prompt for a choice.
if (startRound) {
	game();
} else {
	alert('Ok, Maybe Next Time.');
}


alert('User Scored ' + userScore + ' Points')
alert("Computer Scored " + computerScore + " Points")
if (userScore === computerScore) {
	alert("It's a Tie!");
} else if (userScore > computerScore) {
	alert('User wins, congrats!');
} else if (computerScore > userScore) {
	alert('Computer wins, please try again.');
}

alert('Reload to Play Again')
