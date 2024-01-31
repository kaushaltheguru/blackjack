//console.log("hi this is m log")
//console.log("firse comment kkar diya")
//let firstCard = Math.floor(Math.random()*(11-2+1)+2)
let firstCard = 0

//let secondCard = Math.floor(Math.random()*(11-2+1)+2)
let secondCard = 0

let sum = firstCard + secondCard
console.log(sum)
let hasBlackjack = false
console.log(hasBlackjack)
let isAlive = true
console.log(isAlive)
let message = ""

playBlackjack()

function getRandom(min,max){
    //console.log("function me hu ")
    return Math.floor(Math.random()*(max-min+1)+min)
    //this functions returns a random integer between min and max 
}


function playBlackjack(){
    firstCard = getRandom(2,11)
    secondCard = getRandom(2,11)
    sum = firstCard + secondCard
    console.log(firstCard)
    console.log(secondCard)
    console.log(sum)
    let pCards = document.getElementById("cards-el")
    pCards.textContent = "Cards: " +firstCard + " & " + secondCard
    let pSum = document.getElementById("sum-el")
    pSum.textContent = "Sum: " + sum
    let pMessage = document.getElementById("message-el")
    
    if (sum < 21)
    {
        message = "do you want to pick another card"
    }
    else if(sum === 21)
    {
        message = "Congratulations You have a Black Jack"
        hasBlackjack = true
    }
    else if(sum > 21)
    {
        message = "Unfortunately you have lost, i feel very sad for you"
        isAlive = false
    }
    console.log(message)
    console.log("Jeet Gaya : " + hasBlackjack)
    console.log("Zinda hai ?? : "+ isAlive)
    pMessage.textContent = message;
}