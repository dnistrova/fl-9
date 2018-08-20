const one = 1;

const n = 5;
let maxNumber = n;
let prize = 0;
const a = 10;
let maxCurrentAttempt = a;
const numberOfGuesses = 3;

function generateRandomNumber(max) {
	let randomNumber = Math.random();

	randomNumber = randomNumber * (max + one);
	randomNumber = Math.floor(randomNumber);

	return randomNumber;
}

function winAndContinue(wonPrize) {
	prize += wonPrize;

	alert('Congratulation! Your prize is: ' + prize + '$.');

	let cont = confirm('Do you want to continue?');

	if (cont) {
		maxNumber *= 2;
		maxCurrentAttempt *= 3;
		return true;
	} else {
		alert('Thank you for a game. Your prize is: ' + prize + '$');
	}
}

function playGame(maxNumber, maxPrize, numberOfGuesses) {
	let randomNumber = generateRandomNumber(maxNumber);

	let currentPrize = maxPrize;
	let guessNumber = numberOfGuesses;
	while (guessNumber > 0) {
		let guess = '';
		let message = 'Enter a number from 0 to ' + maxNumber +
			'\nAttempts left: ' + guessNumber +
			'\nTotal prize: ' + prize + '$' +
			'\nPossible prize on current attempt: ' + currentPrize + '$';
		guess = prompt(message, guess);

		if (guess === null) {
			alert('Thank you for a game. Your prize is: ' + prize + '$');
		} else if (guess !== randomNumber) {
			console.log('Try again');
		} else {
			return winAndContinue(currentPrize);
		}
		guessNumber--;
		currentPrize = Math.floor(currentPrize / 2);
	}

	alert('Thank you for a game. Your prize is: ' + prize + '$');
}

function play() {
	while (playGame(maxNumber, maxCurrentAttempt, numberOfGuesses)) {
		console.log('Play game');
	}

	const again = confirm('Do you want to play again?');
	if (again) {
		maxNumber = n;
		prize = 0;
		maxCurrentAttempt = a;

		play();
	} else {
		alert('You did not become a millionaire, but can.');
	}
}

const start = confirm('Do you want to play a game?');

if (start) {
	play();
} else {
	alert('You did not become a millionaire, but can.');
}
