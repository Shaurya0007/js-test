// FOR LOOP  :- USED TO ITERATE A PEACE OF CODE


// formate of for loop 

// for(initializations; condition; updation){
    
     // do something
// }

// forward run or, increasing value 
console.log("increase");
for(let i = 1; i<=10; i++){
    console.log(i)
}

// backward run or, decreasing value
console.log("decrease");
for(let i = 10; i >= 1; i--){
    console.log(i)
}
 
// table of 2
console.log("table of 2")

for (let i = 2 ; i <= 20; i = i + 2){
    console.log(i)
}
 
// table of 3
console.log("table of 4");

for (let i = 4 ; i <= 40; i = i + 4){
    console.log(i)
}

// less than method
console.log("decrease");

for(let i = 40; i >= 4; i= i-4){
    console.log(i)
}


//print all odd numbers (1-16)

console.log("all odd number")
for (let O = 1 ; O <= 15; O = O + 2){
    console.log(O)
}

// print all even number(1-20)
console.log("even numbers");
for(let E = 2; E <= 20; E = E + 2){
    console.log(E)
}


// THE MULTIPLICATION TABLE OF 5

for(let i = 5; i <= 50; i = i + 5){
    console.log(i);
}


// INFINITE FOR LOOP

// eg-1

// for(let i = 1;i>=0; i++){
//     console.log(i);
// }

// eg-2

// for(let i = 1; ;i++){
//     console.log(i);
// }

// eg-3

// for(let i = 1; i <= 5; i--){
//     console.log(i);
// }


// how to print any number of table in loop with the help of prompt

// console.log("you can print any numbers of table");
// let n = prompt("pass any numbers")
// n = parseInt(n)

// for(let i = n; i <= n*10; i=i+n){
//     console.log(i)
// }

// eg-2

// let o = prompt("pass any n number")
// o = parseInt(o)

// for(let n = o ; n <= o*10;n=n+o){
//     console.log(n)
// }



// NESTED LOOP increasing value


for(let i = 1; i <= 3;i++){
    console.log(`array${i}`)
    for(let j = 1; j <= 3 ;j++){
        console.log(j)
    }
}

// eg-2

// nested loop Decreasing value

for(let n = 5; n >= 1; n--){
    console.log(`outer loop${n}`)
    for(let m = 3; m >= 0 ; m--){
        console.log(m)
    }
}

