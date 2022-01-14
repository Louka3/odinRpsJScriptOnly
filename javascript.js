function computerPlay(){
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
function getRandomNum(){
    return (Math.floor(Math.random() * 3) + 1)
    /*https://www.w3schools.com/js/js_random.asp
    had to look up how to generate a random number */
}
function playerSelection(){
    let selection = window.prompt("","Rock, Paper, or Scissors?: ")
    return (selection.slice(0,1).toUpperCase() + selection.slice(1,selection.length).toLowerCase())
}
function getComputerSelection(){
    computerPlay()
}
function getWinner(player, computer){
    
}