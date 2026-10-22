// Guess The number game
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;

function askForGuess() {
  terminal.question('Guess a number from 1 to 100: ', (answer) => {
    const guess = Number(answer);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log('Please enter a whole number from 1 to 100.');
      askForGuess();
      return;
    }

    if (guess < randomNumber) {
      console.log('Too low. Try again.');
      askForGuess();
    } else if (guess > randomNumber) {
      console.log('Too high. Try again.');
      askForGuess();
    } else {
      console.log('Correct! You guessed the number.');
      terminal.close();
    }
  });
}

askForGuess();
