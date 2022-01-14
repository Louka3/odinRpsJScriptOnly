function getRandomNum(){
    return (Math.floor(Math.random() * 3) + 1)
    /*https://www.w3schools.com/js/js_random.asp
    had to look up how to generate a random number */
}
function computerPlay(){
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
function playerSelection(){
    let selection = window.prompt("","Rock, Paper, or Scissors?: ")
    return (selection.slice(0,1).toUpperCase() + selection.slice(1,selection.length).toLowerCase())
            /*Ensures the returned choice has the proper casing */
}
function getComputerSelection(){
    return computerPlay()
}
function getPlayerSelection(){
    return playerSelection()
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
function playGame(){
    let player = getPlayerSelection()
    let computer = getComputerSelection()
    let winner = getWinner(player, computer)
    
    if (winner == "Tie"){
        return ("The player chose " + player + ".\nThe computer chose " +
        computer + ".\nThe game was a tie!")
    }
    return ("The player chose " + player + ".\nThe computer chose " +
    computer + ".\nThe " + winner + " is the winner!")
}