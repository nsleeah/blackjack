// Declare Variables..
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
console.log(sum)

//Logic.
if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else if (sum > 21) {
    console.log("You're out of the game! 😭")
}
