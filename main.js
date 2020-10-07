/*
In the event listener for a new game, 
change the answer to a new random number
from 1 to 100, and set the message shown 
to the user to one that asks the player to guess a number.
*/

document.addEventListener('DOMContentLoaded', event => {
	let form = document.getElementsByTagName('FORM')[0];
	let paragraph = document.querySelector('p');
	let submit = document.querySelector('fieldset').childNodes[3];
	let answer;
	newGame();

	form.addEventListener('submit', event => {
		event.preventDefault();
		let guess = parseInt(form.elements[1].value, 10);
		let submit = document.querySelector('fieldset').childNodes[3];
		console.log(answer);
		if (Number.isNaN(guess)) {
			paragraph.textContent = 'Sorry, this is an invalid answer';
		} else {
			let message = (guess > answer) ? 'Sorry, the guess is higher than the correct answer' : 'Sorry, the guess is lower than the correct answer';
		  if (guess === answer) {
		 	  message = 'Correct!';
				submit.disabled = true;
				submit.style.background = 'gray';
				submit.style.color = 'black';
		  }

		  paragraph.textContent = message;
		}
	});

	document.querySelector('a').addEventListener('click', event => {
		event.preventDefault();
		newGame();
	})

	function newGame() {
		answer = generateAnswer();
		paragraph.textContent = 'Please guess a number from 1 to 100';
		submit.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
		submit.style.color = 'white';
		form.elements[1].value = ''; 
	}

	function generateAnswer() {
	  return Math.floor(Math.random() * 100) + 1;
  }
})