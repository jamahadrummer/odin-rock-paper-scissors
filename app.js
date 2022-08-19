function computerPlay() {
	return computerArray[~~(Math.random() * computerArray.length)];
}
function playRound(playerChose, computerChose) {
	if (playerChose === 'Rock' || playerChose === 'Paper' ||
		playerChose === 'Scissors') {
		// Find Tie Condition
		if (computerChose === playerChose) {
			// winDisp.classList.add('content');
			// winDisp.textContent = "It's a Tie!";
			// turnCont.appendChild(winDisp);
			addPointComputer();
			addPointUser();
			// Paper covers Rock options
		} else (computerChose != playerChose);
		if (computerChose === 'Paper' && playerChose === 'Rock') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'Computer wins, Paper covers Rock.';
			// turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'Rock' && playerChose === 'Paper') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'User wins, Paper Covers Rock.';
			// turnCont.appendChild(winDisp);
			addPointUser();
			// Rock Breaks Scissors options
		} else if (computerChose === 'Rock' && playerChose === 'Scissors') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'Computer wins, Rock breaks Scissors.';
			// turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'Scissors' && playerChose === 'Rock') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'User wins, Rock breaks Scissors.';
			// turnCont.appendChild(winDisp);
			addPointUser();
			// Scissors cut Paper Options
		} else if (computerChose === 'Scissors' && playerChose === 'Paper') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'Computer wins, Scissors cut Paper.';
			// turnCont.appendChild(winDisp);
			addPointComputer();
		} else if (computerChose === 'Paper' && playerChose === 'Scissors') {
			// winDisp.classList.add('content');
			// winDisp.textContent = 'User wins, Scissors cut Paper.';
			// turnCont.appendChild(winDisp);
			addPointUser();
		}
	}
}


function addPointUser() {
	userScore = userScore + 1;
}

function addPointComputer() {
	computerScore = computerScore + 1;
}

const turnCont = document.querySelector('.turnContainer')
const winCont = document.querySelector('.winContainer')
const scoreCont = document.querySelector('.scoreContainer')
const turnDiv = document.createElement('div')
const winDiv = document.createElement('div')
const scoreDiv = document.createElement('div')
const computerArray = ['Rock', 'Paper', 'Scissors'];
const btns = document.querySelectorAll('.btn')
let userScore = 0;
let computerScore = 0;


btns.forEach(btn => {
	btn.addEventListener('click', function () {
		let computerChose = computerPlay();
		let choseArr = ['User Chose ', btn.id, ', Computer Chose ', computerChose];
		playRound(btn.id, computerChose);
		//
		turnDiv.classList.add('content')
		turnDiv.textContent = choseArr.join('')
		turnCont.appendChild(turnDiv);
		// 
		winDiv.classList.add('content')
		winDiv.textContent = 'Win State'
		winCont.appendChild(winDiv)
		//
		scoreDiv.classList.add('content')
		scoreDiv.textContent = 'Score State'
		scoreCont.appendChild(scoreDiv)
		console.log(choseArr.join(''))
	});
});

