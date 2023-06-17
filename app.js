
/*// Declare Variables..
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
     cards.push(card)
     console.log(cards)
     renderGame()

}
*/

//For Loops
//// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?
//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
    console.log(count)

}







