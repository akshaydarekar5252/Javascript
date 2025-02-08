const favMovie = "avatar";
let guess = prompt("Gess my favorite movie?");
while((guess !== favMovie) && (guess !== "quit")) {
    guess = prompt("Gess again!");
}
if(guess == favMovie) {
    alert("You got it right!");
} else {
    alert("You quit!");
}