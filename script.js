// function getRandomNum(){
//     return (Math.floor(Math.random() * 3) + 1)
//     /*https://www.w3schools.com/js/js_random.asp
//     had to look up how to generate a random number */
// }
// function computerPlay(){
//     /*Assigns either rock paper or scissors depending on the random number 
//     returned from getRandomNum */
//     let num = getRandomNum()
//     switch(num) {
//         case 1:
//             return "Rock"
//         case 2:
//             return "Paper"
//         case 3:
//             return "Scissors"
//         default:
//             return "Nope"
//         }
// }
// function playerSelection(){
//     let selection = window.prompt("","Rock, Paper, or Scissors?: ")
//     return (selection.slice(0,1).toUpperCase() + selection.slice(1,selection.length).toLowerCase())
//             /*Ensures the returned choice has the proper casing */
// }
// function getComputerSelection(){
//     return computerPlay()
// }
// function getPlayerSelection(){
//     return playerSelection()
// }

// function playGame(){
//     let player = getPlayerSelection()
//     let computer = getComputerSelection()
//     let winner = getWinner(player, computer)
    
//     if (winner == "Tie"){
//         return ("The player chose " + player + ".\nThe computer chose " +
//         computer + ".\nThe game was a tie!")
//     }
//     return ("The player chose " + player + ".\nThe computer chose " +
//     computer + ".\nThe " + winner + " is the winner!")
//     //end
// }

const newGameButton = document.querySelector('#new-game')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const display = document.querySelector('#display')
const buttonArray = [rockButton, paperButton, scissorsButton]
let selection = ""
let computerSelection = ""
let winner = ""

newGameButton.addEventListener("click",playGame)

function playGame() {
    selection = ""
    computerSelection = ""
    winner = ""
    display.textContent = "Select Rock, Paper, or Scissors";
    computerSelection = computerChoice();
    rockButton.addEventListener('click', getWinner.bind(this,'Rock', computerSelection))
    paperButton.addEventListener('click', getWinner.bind(this,'Paper', computerSelection))
    scissorsButton.addEventListener('click', getWinner.bind(this,'Scissors', computerSelection))
    for (let b = 0; b < buttonArray.length; b++){
        buttonArray[b].addEventListener('click',displayWinner)
    }
}
function getSelection(playerSelection){
    selection = playerSelection
}

function getRandomNum(){
    return (Math.floor(Math.random() * 3) + 1)
    /*https://www.w3schools.com/js/js_random.asp
    had to look up how to generate a random number */
}

function computerChoice(){
    /*Assigns either rock paper or scissors depending on the random number 
    returned from getRandomNum */
    let num = getRandomNum()
    switch(num) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
        default:
            return "Nope"
        }
}

function displayWinner() {
    
    display.textContent = "The winner is: " + winner;
}

function getWinner(player, computer){
    /*Uses switch statements to determine the winner of the game.
    Seperate switch statements in each case for each possible player answer.
    Debated on whether to use a bunch of if...else statements or switch 
    statements before ultimately settling on switch*/
    
    switch (player){
        case "Rock":
            switch (computer){
                case "Paper":
                    winner = "Computer"
                    break
                case "Scissors":
                    winner = "Player"
                    break
                default: 
                    winner = "Tie"
                    break
            }
        case "Paper":
            switch (computer){
                case "Rock":
                    winner = "Player"
                    break
                case "Scissors":
                    winner = "Computer"
                    break
                default:
                    winner = "Tie"
                    break
            }
        case "Scissors":
            switch (computer){
                case "Rock":
                    winner = "Computer"
                    break
                case "Paper":
                    winner = "Player"
                    break
                default:
                    winner = "Tie"
                    break
            }
    }
}