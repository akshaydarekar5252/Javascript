//only using js in this project

let max = prompt("Enter the maximum number!");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt(" guess the number ");
while(true){
    if( guess == "quit") {
        console.log("You quit the game");
        break;
    }
    if( guess == random ) {
        console.log("Congrats! You guessed the number", random);
        break;
    } else if( guess > random ) {
        guess = prompt(" hint :Too high! Guess again");
    } else {
        guess = prompt(" hint :Too low! Guess again");
    }
}