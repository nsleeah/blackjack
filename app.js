

// Declare Variables..
let cards =  []
let sum = 0
let hasBlackJack = false
let isAlive = false //Changed condition
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//Random Card Funct -
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
    //let randomNumber = Math.floor(Math.random() * 14) - Alternative Way?
}

// Create a new function called startGame() that calls renderGame()
const startGame = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
     let card = getRandomCard()
     sum += card
     cards.push(card)
     console.log(cards)
     renderGame()
    }
}

//Game succesfully working.