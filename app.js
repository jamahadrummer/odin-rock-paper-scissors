function computerPlay() {
	return computerArray[~~(Math.random() * computerArray.length)];
}
function playRound(playerChose) {
	if (playerChose === 'rock' || playerChose === 'paper' ||
		playerChose === 'scissors') {
		let computerChose = computerPlay();
		console.log("Computer played " + computerChose);
		// Find Tie Condition
		if (computerChose === playerChose) {
			winDisp.classList.add('content');
			winDisp.textContent = "It's a Tie!";
			turnCont.appendChild(winDisp);
			addPointComputer();
			addPointUser();
			// Paper covers rock options
		} else (computerChose != playerChose);
		if (computerChose === 'paper' && playerChose === 'rock') {
			winDisp.classList.add('content');
			winDisp.textContent = 'Computer wins, Paper covers rock.';
			turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'rock' && playerChose === 'paper') {
			winDisp.classList.add('content');
			winDisp.textContent = 'User wins, Paper Covers Rock.';
			turnCont.appendChild(winDisp);
			addPointUser();
			// Rock Breaks scissors options
		} else if (computerChose === 'rock' && playerChose === 'scissors') {
			winDisp.classList.add('content');
			winDisp.textContent ='Computer wins, Rock breaks Scissors.';
			turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'scissors' && playerChose === 'rock') {
			winDisp.classList.add('content');
			winDisp.textContent ='User wins, Rock breaks Scissors.';
			turnCont.appendChild(winDisp);
			addPointUser();
			// Scissors cut Paper Options
		} else if (computerChose === 'scissors' && playerChose === 'paper') {
			winDisp.classList.add('content');
			winDisp.textContent ='Computer wins, Scissors cut paper.';
			turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'paper' && playerChose === 'scissors') {
			winDisp.classList.add('content');
			winDisp.textContent ='User wins, Scissors cut paper.';
			turnCont.appendChild(winDisp);
			addPointUser();
		}
	} return ('Computer chose')
}


function addPointUser() {
	userScore = userScore + 1;
}

function addPointComputer() {
	computerScore = computerScore + 1;
}
const winDisp = document.createElement('div')
const userDisp = document.createElement('div')
const computerArray = ['rock', 'paper', 'scissors'];
const btns = document.querySelectorAll('.btn')
const turnCont = document.querySelector('.turnContainer')
let userScore = 0;
let computerScore = 0;


btns.forEach(btn => {
	btn.addEventListener('click', function () {
		playRound(btn.id)
	})
});

