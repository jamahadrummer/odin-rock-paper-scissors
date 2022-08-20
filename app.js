function computerPlay() {
	return computerArray[~~(Math.random() * computerArray.length)];
}
function playRound(playerChose, computerChose) {
	// Find Tie Condition
	if (computerChose === playerChose) {
		// Paper covers Rock options
	} else (computerChose != playerChose);
	if (computerChose === 'Paper' && playerChose === 'Rock') {
		addPointComputer();
	} else if (computerChose === 'Rock' && playerChose === 'Paper') {
		addPointUser();
		// Rock Breaks Scissors options
	} else if (computerChose === 'Rock' && playerChose === 'Scissors') {
		addPointComputer();
	} else if (computerChose === 'Scissors' && playerChose === 'Rock') {
		addPointUser();
		// Scissors cut Paper Options
	} else if (computerChose === 'Scissors' && playerChose === 'Paper') {
		addPointComputer();
	} else if (computerChose === 'Paper' && playerChose === 'Scissors') {
		addPointUser();
	}
}

function addPointUser() {
	userScore = userScore + 1;
}

function addPointComputer() {
	computerScore = computerScore + 1;
}

function addText(insert, arr, container) {
	insert.classList.add('content')
	insert.textContent = arr.join('')
	container.appendChild(insert);
}

function removeText(minus, container) {
	container.removeChild(minus)
}

const turnCont = document.querySelector('.turnContainer')
const winCont = document.querySelector('.winContainer')
const scoreCont = document.querySelector('.scoreContainer')
const turnDiv = document.createElement('div')
const winDiv = document.createElement('div')
const scoreDiv = document.createElement('div')
const computerArray = ['Rock', 'Paper', 'Scissors'];
const btns = document.querySelectorAll('.btn')
const userWins = ['Game is over, User Wins!']
const computerWins = ['Game is Over, Computer Wins']
let userScore = 0;
let computerScore = 0;

btns.forEach(btn => {
	btn.addEventListener('click', function () {
		if (userScore < 5 && computerScore < 5) {
			let computerChose = computerPlay();
			playRound(btn.id, computerChose);
			let choseArr = ['User Chose ', btn.id, ', Computer Chose ', computerChose];
			let scoreArr = ['User: ', userScore, ' ', 'Computer: ', computerScore]
			addText(turnDiv, choseArr, turnCont)
			// addText(winDiv, winArr, winCont)
			addText(scoreDiv, scoreArr, scoreCont)
			console.log(choseArr.join(''))
		} else if (userScore === 5) {
			removeText(turnDiv, turnCont)
			addText(winDiv, userWins, winCont)
		} else if (computerScore === 5) {
			removeText(turnDiv, turnCont)
			addText(winDiv, computerWins, winCont)
		}
	})
});