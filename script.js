let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Show Icons
  document.getElementById("user-choice-icon").textContent = getEmoji(userChoice);
  document.getElementById("computer-choice-icon").textContent = getEmoji(computerChoice);

  // Show Texts
  document.getElementById("user-choice-text").textContent = userChoice;
  document.getElementById("computer-choice-text").textContent = computerChoice;
  document.getElementById("choices-made").style.display = "flex";

  // Calculate Result
  let resultMsg = "";
  let resultClass = "";

  if (userChoice === computerChoice) {
    resultMsg = "It's a tie!";
    resultClass = "tie";
    tieScore++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMsg = `You Win! ${getMessage(userChoice, computerChoice)}`;
    resultClass = "win";
    userScore++;
  } else {
    resultMsg = `You Lose! ${getMessage(computerChoice, userChoice)}`;
    resultClass = "lose";
    computerScore++;
  }

  // Update Result UI
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = resultMsg;
  resultDiv.className = `result ${resultClass}`;

  // Update Scores
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("tie-score").textContent = tieScore;
}

function getEmoji(choice) {
  return choice === "rock" ? "✊" :
         choice === "paper" ? "✋" : "✌";
}

function getMessage(winner, loser) {
  if (winner === "rock" && loser === "scissors") return "Rock crushes Scissors!";
  if (winner === "paper" && loser === "rock") return "Paper covers Rock!";
  if (winner === "scissors" && loser === "paper") return "Scissors cut Paper!";
}
