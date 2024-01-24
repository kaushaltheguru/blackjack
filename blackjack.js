console.log("hi this is m log")
console.log("firse comment kkar diya")
//let firstCard = Math.floor(Math.random()*(11-2+1)+2)
let firstCard = getRandom(2,11)
console.log(firstCard)
//let secondCard = Math.floor(Math.random()*(11-2+1)+2)
let secondCard = getRandom(2,11)
console.log(secondCard)
let sum = firstCard + secondCard
console.log(sum)

function getRandom(min,max){
    console.log("function me hu ")
    return Math.floor(Math.random()*(max-min+1)+min)
    //this functions returns a random integer between min and max 
}