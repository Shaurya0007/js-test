
// 1:-Scope :- scope determines the accessibility og variables , objects and functions form different parts of the codes 
 

// 2:-lexical scope :-i
// global  scope :-



// Function scope :-function defined inside a function are not accessible (visible) from outdide the function 
// function scope

function funScope(a,b){
  let sum = a+b
}
funScope()
// console.log(sum);  passing value is error


// 2:- block scope {}:- variables declared inside a {} block cannot be accessed from outside the block-
 
let age = 22
if (age >= 18){
    let str = "adult"
    console.log(str);
}

// console.log(str);  // passing value is error


// 3:- Lexical funScope:- A veriavle defined outside a function can be accessible inside another function defined after the variable declaration (mostly use in nested loops)


function outer (){
    let x = 10
    let y = 20
    function inner(){
        console.log(x);
        console.log(y);
    }
    inner()
}

outer()


function outer2 (){
    function inner2(){
        console.log(x);
        console.log(y);
    }
    let x = 10
    let y = 20
    
    inner2()
}

outer2()



// lexcial scope

function ram (){
    
    let c = 18
    let d = 39
    function innerRam(){
       let shy = c+d
       console.log(shy);
    }
    innerRam()
}

ram()


// practice question 

let greet = "hello"

function changeGreet(){
    let greet = "namaste"
    console.log(greet);
    function innerGreen(){
        console.log(greet);
    }
    // innerGreen()
}

console.log(greet);
changeGreet()
   

