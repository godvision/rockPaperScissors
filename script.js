


function computerPlay() {
    let wubber = [];
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}

let playerScore = 0;
let compScore = 0;


// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", function () {
//         checkWinner(button.value);
//     });
// });



function checkWinner(playerSelection, computerPlay) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            ++compScore
            return "You lose! Paper beats rock.";

        } else {
            ++playerScore
            return "You win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            ++playerScore
            return "You win! Paper beats rock.";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            ++compScore
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerSelection === "rock") {
            ++compScore
            return "You lose! Rock beats scissors.";
        } else if (computerSelection === "paper") {
            ++playerScore
            return "You win! Scissors beats paper.";
        } else {
            return "Draw!";
        }
    }
}


for (let i = 0; i < 5; i++) {

    let playerSelection = prompt("rock, paper, or scissors?")
    let computerSelection = computerPlay()
    checkWinner()
    console.log(checkWinner(playerSelection, computerSelection))

}
if (playerScore > compScore) {
    console.log(`you win with ${playerScore} scores!`)
} if (compScore > playerScore) {
    console.log(`The computer wins with ${compScore} scores!`)
} if (compScore === playerScore) {
    console.log("its a draw!")
}
