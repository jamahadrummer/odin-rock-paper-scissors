function computerPlay() {
	return computerArray[~~(Math.random() * computerArray.length)];
}

function playRound() {
	// User fills playerChoice variable with their play
	// playerChoice = prompt('Please enter Rock, Paper, or Scissors.');
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
				// alert("It's a tie!");
				addPointComputer();
				addPointUser();
				// Paper covers rock options
			} else (computerChose != playerChose);
			if (computerChose === 'paper' && playerChose === 'rock') {
				// alert('Computer wins, Paper covers rock.');
				addPointComputer();
			} else if (computerChose === 'rock' && playerChose === 'paper') {
				// alert('User wins, Paper Covers Rock.');
				addPointUser();
				// Rock Breaks scissors options
			} else if (computerChose === 'rock' && playerChose === 'scissors') {
				// alert('Computer wins, Rock breaks Scissors.');
				addPointComputer();
			} else if (computerChose === 'scissors' && playerChose === 'rock') {
				// alert('User wins, Rock breaks Scissors.');
				addPointUser();
				// Scissors cut Paper Options
			} else if (computerChose === 'scissors' && playerChose === 'paper') {
				// alert('Computer wins, Scissors cut paper.');
				addPointComputer();
			} else if (computerChose === 'paper' && playerChose === 'scissors') {
				// alert('User wins, Scissors cut paper.');
				addPointUser();
			}
		} else {
			// alert('Incorrect Entry, Round Forfeited');
			addPointComputer();
		}
	}
}

function addPointUser() {
	userScore = userScore + 1;
}

function addPointComputer() {
	computerScore = computerScore + 1;
}
const computerArray = ['rock', 'paper', 'scissors'];
const btns = document.querySelectorAll('.btn')
const rock = document.querySelector(`.btn[data-key="rock"`)
const paper = document.querySelector(`.btn[data-key="paper"`)
const scissors = document.querySelector(`.btn[data-key="scissors"`)
let userScore = 0;
let computerScore = 0;

// console.log(btns)
// console.log(rock)
// console.log(paper)
// console.log(scissors)

btns.forEach(btn => {
	btn.addEventListener('click', function () {
		console.log(btn.key)
	})

});