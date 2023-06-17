/*
// Declare Variables..
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
    renderGame()
}

//Render Game Logic
const renderGame = () => {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
     let card = 6
     sum += card
     renderGame()

}
*/

//Adding Removing Items from Array.
let cards = [7, 4]
cards.push(6) //Method
console.log(cards)

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

//Remove from Array.
messages.pop()
console.log(messages)






