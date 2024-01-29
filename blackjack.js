//console.log("hi this is m log")
//console.log("firse comment kkar diya")
//let firstCard = Math.floor(Math.random()*(11-2+1)+2)
let firstCard = getRandom(2,11)
console.log(firstCard)
//let secondCard = Math.floor(Math.random()*(11-2+1)+2)
let secondCard = getRandom(2,11)
console.log(secondCard)
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
}