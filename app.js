
/*
// Declare Variables..
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Random Card Funct
function getRandomCard() {
    return 5
}

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
    renderGame()
}

//Render Game Logic
const renderGame = () => {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

//New Card Logic
const newCard = () => {
     let card = getRandomCard()
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame()

}
*/

//Math Object Practice - Math Random - it generates a random number between 0 and 1 (not inclusive of 1)
//let randomNumber = Math.random() * 6
//console.log(randomNumber) 
// Math.random() = 0.000 -> 0.999
// Math.random() * 6 = 0.000 -> 5.999
//Math.floor(Math.random() * 6) 0-5

//Math Objects
//Random - generates random number 
//Floor - it removes the decimals
//let flooredNumber = Math.floor(3.45632) //Output 3
//console.log(flooredNumber)

//Creating a Dice using Math Random and Math Floor
let randomNumber = Math.floor( Math.random() * 7 )
console.log(randomNumber)
