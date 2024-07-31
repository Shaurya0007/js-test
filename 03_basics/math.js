//practice Math methods

// PROPERTIES
console.log(Math.PI);
console.log(Math.E);

// METHODS

//absolute method :- returns absolute value 
// Math.abs()  
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(-5.55));


// power method :- returns power value
// Math.pow()

console.log(Math.pow(2,4));
console.log(Math.pow(3,5));
console.log(Math.pow(2,10));

// floor method :- round of nearest ,smallest  equal or ,integer number  
// Math.pow() 

console.log(Math.floor(3))
console.log(Math.floor(3.5))
console.log(Math.floor(3.555555))
console.log(Math.floor(3.99999))
console.log(Math.floor(-3))
console.log(Math.floor(-3.99999))
console.log(Math.floor(-3.55555))

// ceil method :-  round of  nearest , larger or, equal  ,integer number  , math.floor() 
//  Math.ceil() 

console.log(Math.ceil(2));
console.log(Math.ceil(2.5555));
console.log(Math.ceil(2.9999));
console.log(Math.ceil(-2.99999));
console.log(Math.ceil(-2.5555));


// random method :- generate random no in between 0 to 1
// 1 :- exclusive number 
//  others :- inclusive numbers
// Math.random()

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


// generate from 1  to 10  random numbers 

let step1 = Math.random()
console.log(step1);

//  1 to 10

let step2 = step1 * 10
console.log(step2);

// roundof or remove decimal value 

let step3 = Math.floor(step2)
console.log(step3);

//  exclusive value 

let step4 = step3 + 1
console.log(step4);


// generate a random numbers  between 1 to 100

let num = Math.floor(Math.random()*100)+ 1
console.log(num);

// generate a random number  between 1 to 5

let num2 = Math.floor(Math.random()*5)+ 1
console.log(num2)

// generate random number between  20 to 25

let number = Math.floor(Math.random()*5)+20
console.log(number);

// generate no between 20 to 80

let number2 = Math.floor(Math.random()*60)+21
console.log(number2);

// generate random in between 10 to 20

let ten = Math.floor(Math.random()*10)+11
console.log(ten)

// generate a random number in between 40 to 80 

let rol = Math.floor(Math.random()*40)+41
console.log(rol)



// practice type questions //guessing number

// let max = prompt("enter your max number")
// let random = Math.floor(Math.random()*max)+1
// let guess = prompt("enter your guessing number")

// while(true){
//     if(guess == "quit"){
//         console.log("you quit")
//         break;
//     }
//     if(guess == random){
//         console.log("congrats ! you guess it right!!",random)
//         break;

//     } else if(guess < random){
//         guess = prompt("your guess was too small ! please try again")
//     }else if(guess > random){
//         guess = prompt("your guess was to larg ! please tyr again")
//     }
// }