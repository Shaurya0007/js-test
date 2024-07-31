// FUNCTIONS


// FORMATE OF FUNCTION

function hello (){
    console.log("hello_would")
}

hello();


function raid(){
    console.log("all is well")
}
raid();


// USING FOR LOOP IN FUNCTION
// ex:-1
function print1to5(){
    console.log("print one to five");
    for(let i = 0 ; i <= 5; i++){
        console.log(i)
    }
}

print1to5();
  
// ex:- 2 
// USING FOR OF LOOP IN FUNCTION

function print(){
    let same = "yellow"
    for(create of same){
        console.log(create)
    }
}
print()


// USING IF ELSE METHOD IN FUNCTION

// eg:- 1
function isAdult(){
    let age = 20
    if(age > "18"){
        console.log("you are adult")
    }else{
        console.log("you are teen")
    }
}

isAdult();

//eg:-2

function vote (){
    let voter = 22
    if(voter > 18){
        console.log("you can vote")
    } else if(voter < 18){
        console.log("you can't vote");
    } else {
        console.log("something went wrong")
    }
}
vote();

//ex :- 5 
function fun (){
    console.log("twinkle twinkle little star");
    console.log("how i wonder what you are");
}

fun()
fun()
fun()
isAdult()
vote()
print()


// practice question 

//Q:- create a function  to roll a dice & display the value of the dice (1 to 6 )



function rollDice(){
    let rand = Math.floor(Math.random()*6)+1
    console.log(rand);
}

rollDice()
rollDice()
rollDice()
rollDice()