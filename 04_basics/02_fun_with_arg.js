//function with argument

function arg(sum){
    console.log(sum)

}

arg(1+2)


// ex -2 concat strings by parameter ,argument 

function concat(str){
    console.log(str);
}

concat("hello" + "would");


function concat(str,str2){
    console.log(str,str2);
}

concat(5,6)

// create a function to roll a dice & akways display the vlaue of the dice(1 to)

function dice(){
    let rand = Math.floor(Math.random()*6)+1
    console.log(rand)
}
dice()


// function whit parameaters and argument
// ex :- 1

function printName(name){
    console.log(name)
}
printName("shaurya singh")


// print age and name 

function nameAge(name,age){
    console.log(`my name id ${name}, and age is ${age}`)
}
nameAge("shardha", 23)
nameAge("aman", 23)
nameAge("shaurya", 22)

// ex:-5

function divide(num1,num2) {
    console.log(num1 / num2);
    console.log(num1 * num2);
    console.log(num1 - num2);
    console.log(num1 + num2);
}

divide(56,2)
divide(56,4)

// create a function that gives us the average of 3 numbers

function avarage (a,b,c){
    let calAvg = (a+b+c)/3
    console.log(calAvg);
}
avarage(2,4,6)
avarage(1,5,6)
avarage(2,4,6)
avarage(10,4,6)
avarage(2,20,6) 

// create a function that prints the multiplication table of a numbers


function printTable (n){
    for(let i = n ; i <= n * 10; i = i+n)
    // for(let i = n ; i <= n * 10; i += n )
        console.log(i);
}
printTable(100)

// for(let i = 2; i <= 20 ; i = i+2){
//     console.log(i);
// }


function printTable2(n){
    console.log(`print ${n}s of table`,);
    for(let i = n; i <= n*10; i=i+n){
        console.log(i)
    }
}

printTable2(27)
printTable2(27)

function printTbl(n){
    console.log(`table of ${n}`);
    for(let i = n ; i <= n*10 ; i+=n){
        console.log(i);
    }
}

printTbl(5)
printTbl(10)
printTbl(15)
printTbl(20)

