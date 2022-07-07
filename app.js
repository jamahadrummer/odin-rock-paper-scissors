const compArray = ["Rock", "Paper", "Scissors"];
function computerPlay() {
	return compArray[~~(Math.random() * compArray.length)];
}
// Show a confirm dialogue allowing user to consent to play.
let playGame = confirm("Rock, Paper, or Scissors?");
// If playGame is accepted prompt for a choice.
if (playGame) {
	// User fills playerChoice variable with their play
	let playerChoice = prompt('Please enter Rock, Paper, or Scissors.');
	if (playerChoice) {
		// user trim function to change entry to lower case
		let playerChose = playerChoice.trim().toLowerCase();
		// check if playerChoice is any of the acceptable entries
		console.log(playerChose)
		if (playerChose === 'rock' || playerChose === 'paper' || playerChose === 'scissors') {
			let computerChose = computerPlay();
			console.log(computerChose);
			if (computerChose === playerChose) {
				alert("It's a tie! Reload and try again")
			} else (computerChose === 'paper' && playerChose === 'rock'); {
				alert("Computer wins, Paper covers rock. Reload and try again")
			} 
		} else {
			alert('Incorrect Entry Please enter Rock, Paper, or Scissors')
			alert('Reload the page and start again')
		}
	} else {
		alert("Sorry you changed your mind.")
	}
} else {
	alert("Ok, maybe next time.")
}



// // Personal Attempts
// const compArray = ["Rock", "Paper", "Scissors"];

// function userPlay() {
// }

// function computerPlay() {
// 	return compArray[~~(Math.random() * compArray.length)];
// }

// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());
// console.log(computerPlay());

