function computerPlay(){
    let num = getRandomInt()
    switch(num) {
        case (int == 1):
            return "Rock"
        case (int == 2):
            return "Paper"
        case (int == 3):
            return "Scissors"
    }
}
function getRandomInt(){
    return Math.floor(Math.random() * 3) + 1;
    /*https://www.w3schools.com/js/js_random.asp
    had to look up how to generate a random number */
}
