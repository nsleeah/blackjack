// Declare Variables..
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false
console.log(sum)

//Logic.
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 👑")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}

//Cash Out(Keeps Track of State of Game from Above Logic)
console.log(hasBlackJack) 

