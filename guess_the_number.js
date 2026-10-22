// Rock Paper Scissors Game
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ['rock', 'paper', 'scissors'];
const scores = { player: 0, computer: 0, ties: 0 };

function finish() {
  terminal.close();
}

function askForChoice() {
  terminal.question('Choose rock, paper, or scissors (or quit): ', (answer) => {
    const playerChoice = answer.trim().toLowerCase();

    if (playerChoice === 'quit' || playerChoice === 'q') {
      finish();
      return;
    }

    if (!choices.includes(playerChoice)) {
      console.log('Please enter rock, paper, scissors, or quit.');
      askForChoice();
      return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`You chose ${playerChoice}; computer chose ${computerChoice}.`);

    if (playerChoice === computerChoice) {
      scores.ties += 1;
      console.log("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      scores.player += 1;
      console.log('You win this round!');
    } else {
      scores.computer += 1;
      console.log('Computer wins this round.');
    }

    console.log(
      `Score — You: ${scores.player}, Computer: ${scores.computer}, Ties: ${scores.ties}`
    );
    askForChoice();
  });
}

terminal.on('close', () => {
  console.log(
    `Final score — You: ${scores.player}, Computer: ${scores.computer}, Ties: ${scores.ties}`
  );
});

askForChoice();
