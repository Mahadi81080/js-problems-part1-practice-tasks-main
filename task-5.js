// ### Task-5: 
// Generate a random number between 10 to 20.

function randomNumber(){

    return Math.floor(Math.random()*11)+10;
}

const generateNumber = randomNumber();
console.log("Random number between 10 and 20:",generateNumber)


// console.log( Math.floor(Math.random()*11)+10)