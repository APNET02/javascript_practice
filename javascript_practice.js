let maximum = parseInt(prompt("enter the maximum number!"));
while (!maximum){
    maximum = parseInt(prompt("enter a valid number!"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;
while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    attempts++;
    if (guess > targetNum){
        guess = prompt("too high! enter a new guess:");
    } else {
        guess = prompt("too low! enter a new guess:");
    }
}
if(guess === 'q'){
    console.log("ok, you quit!")
}else{
    console.log("congrats you win!")
console.log(`you got it! it took you ${attempts} guesses`)
}