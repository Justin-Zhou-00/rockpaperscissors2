
//Options which the computer can choose from
const options = ["rock", "paper", "scissors"]

//Randomly generates rock paper and scissors
function computerPlay(options){
    let range = options.length
    let randomNumberCalculator = Math.floor(Math.random() * range)
    return options[randomNumberCalculator]
}
// Generates player selection with the use of user input
function playerPlay(){
    let playerInput = prompt("Type rock, paper, scissors ..")
    return playerInput.toLowerCase()
}
// Generates the display which determines the winner, cpu vs player
function playRound(playerSelection, computerSelection){
    let winner = 0;
    //Text variables to display the winner and loser of each game
    let winnerText = `You Win! ${playerSelection} beats ${computerSelection}`
    let loserText = `You Lose! ${computerSelection} beats ${playerSelection}`

    //Base case to determine a tie game
    if (playerSelection == computerSelection){
        return "Tie"
        //Rock scenario logic
    }   if (playerSelection == "rock"){
            if (computerSelection == "scissors"){
                return winnerText
            }else return loserText
        //Paper scenario logic
        }else if (playerSelection == "paper"){
            if (computerSelection == "rock"){
                return winnerText
            }else return loserText
        //Scissors scenario logic
        }else if (playerSelection == "scissors"){
            if (computerSelection == "paper"){
                return winnerText
            }else return loserText
        }
}
const playerSelection = playerPlay()
const computerSelection = computerPlay(options)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))