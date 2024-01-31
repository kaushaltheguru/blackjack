//console.log("hi this is m log")
//console.log("firse comment kkar diya")
//let firstCard = Math.floor(Math.random()*(11-2+1)+2)
let btn = document.getElementById("button-el");
let firstCard = 0

//let secondCard = Math.floor(Math.random()*(11-2+1)+2)
let secondCard = 0

let sum = firstCard + secondCard
//console.log(sum)
let hasBlackjack = false
//console.log(hasBlackjack)
let isAlive = true
//console.log(isAlive)
let message = ""
let cards = []
//playBlackjack()

function getRandom(min,max){
    //console.log("function me hu ")
    return Math.floor(Math.random()*(max-min+1)+min)
    //this functions returns a random integer between min and max 
}

function startGame(){
    firstCard = getRandom(2,11)
    cards.push(firstCard);
    secondCard = getRandom(2,11)
    cards.push(secondCard);
    playBlackjack();
    console.log(cards)
    
    btn.textContent = "mujhe mat dabao"
}

function newCard()
{
    let nextCard = getRandom(2,11)
    cards.push(nextCard)
    playBlackjack()
}

function gameOver()
{
    btn.textContent = "Restart"
    cards = []
    sum = 0
    firstCard = 0
    secondCard = 0
    
}


function playBlackjack(){
    //firstCard = getRandom(2,11)
    //secondCard = getRandom(2,11)
    for(i=0;i<cards.length;i++)
    {
        sum += cards[i];
    }
    console.log(sum)
    let pCards = document.getElementById("cards-el")
    pCards.textContent = "Cards: " + cards;
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
        gameOver();
    }
    sum = 0;
    //console.log(message)
    //console.log("Jeet Gaya : " + hasBlackjack)
    //console.log("Zinda hai ?? : "+ isAlive)
    pMessage.textContent = message;
}