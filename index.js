const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
    return userInput;
  } else {
    console.log("Please provide valid input!");
  }
};
function getComputerChoice() {
  let rng = Math.floor(Math.random() * 3);
  switch (rng) {
    case 0:
      return "rock";
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "That game was a tie!";
  }
  if (userChoice == "rock") {
    if (computerChoice == "paper") {
      return "Computer won!";
    } else if (computerChoice == "scissors") {
      return "You won!";
    }
  }
  if (userChoice == "paper") {
    if (computerChoice == "scissors") {
      return "Computer won!";
    } else if (computerChoice == "rock") {
      return "You won!";
    }
  }
  if (userChoice == "scissors") {
    if (computerChoice == "rock") {
      return "Computer won!";
    } else if (computerChoice == "paper") {
      return "You won!";
    }
  }
}
const playGame = () => {
  const userChoice = getUserChoice("scissors");
  const computerChoice = getComputerChoice();
  console.log("You threw:" + userChoice);
  console.log("Computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
