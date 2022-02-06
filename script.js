//query selector variables
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const display = document.querySelector('#display')
const playerScoreDisplay = document.querySelector('#player-score')
const computerScoreDisplay = document.querySelector('#computer-score')
//variables
let computerSelection = computerChoice()
let winner = ""
let playerScore = 0
let computerScore = 0
//event listeners for buttons
rockButton.addEventListener('click',playGame.bind(this,'Rock'))
paperButton.addEventListener('click', playGame.bind(this,'Paper'))
scissorsButton.addEventListener('click', playGame.bind(this,'Scissors'))


function playGame(playerSelection) {
    winner = getWinner(playerSelection, computerSelection)
    announceWinner(winner, playerSelection, computerSelection)
    changeScore(winner)
    displayScore()
    //get a new selection for the computer
    computerSelection = computerChoice()
    winner = ""   
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

function getWinner(player, computer){
    /*Uses switch statements to determine the winner of the game.
    Seperate switch statements in each case for each possible player answer.
    Debated on whether to use a bunch of if...else statements or switch 
    statements before ultimately settling on switch*/
    
    switch (player){
        case "Rock":
            switch (computer){
                case "Paper":
                    return "Computer"
                case "Scissors":
                    return "Player"
                default: 
                    return "Tie"
            }
        case "Paper":
            switch (computer){
                case "Rock":
                    return "Player"
                case "Scissors":
                    return "Computer"
                default:
                   return "Tie"
            }
        case "Scissors":
            switch (computer){
                case "Rock":
                    return "Computer"
                case "Paper":
                    return "Player"
                default:
                    return "Tie"
            }
    }
}

function changeScore(win){
    if (win == 'Player'){
        ++playerScore
        playerScoreDisplay.innerText = "Player Score: " + playerScore
    }
    if (win == 'Computer'){
        ++computerScore
        computerScoreDisplay.innerText = "Computer Score: " + computerScore
    }
}

function displayScore(){
    playerScoreDisplay.innerText = "Player Score: " + playerScore;
    computerScoreDisplay.innerText = "Computer Score: " + computerScore;
}

function announceWinner(win, play, comp){
    if (win == 'Tie'){
        display.innerText = "Player Choice: " + play + 
            "\tComputer Choice: " + comp + "\r\nThe game was a tie!"
        return null
    } 
    display.innerText = "Player Choice: " + play + 
    "\tComputer Choice: " + comp + "\r\nThe winner is: " + win
    /*The only way for me to add newline and tab characters into the string used in .innerText
    was to first change the css if the dispaly element and add the attribute "white-space: pre;"
    (pre-line; is also supposed to work). After adding that to the css, my '\t' was working. 
    Newlines have to use '\r\n'. Every other method I saw either required more work or required me
    to use .innerHTML, which I wanted to avoid since I've read it could lead to security issues.*/
}