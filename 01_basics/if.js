//conditional sentence (if)

console.log('hey! may i vote?')

// let age = 13;
let age = 23;
if(age >= 18){
    console.log("you can vote");
    console.log("you are aligible 1 for vote");

}

//compare to name and asignment operator

let firstName = "shardha"
if(firstName == "shardha"){
    console.log(
        "my name is shardha"
    )
    let a = 25
    if(firstName == "shardha"){
       console.log( `shardha is ready for the vote: ${a}`);
    }
}

console.log('kuch nhin to ye shahi')

let lastName = "shaurya"
if(lastName == "shaurya"){
    console.log("my name is shaurya")

}


// prcice question 1

let color = "red"
// let color = "yello"
// let color = "green" 

if(color === "red"){
    console.log("plese stop . light color is red "  )

}
if(color === "yellow"){
    console.log("go slow. light color is yellow" )
}

if(color === "green"){
    console.log("please Go light color is green")
}

//else if (practice 1)

// let Age = 25
let Age = 19;

if(Age < 18){
    console.log("you can not vote")
}else if(Age <= 18){
    console.log("you can not vote")
}else if(Age > 18 ){
    console.log("you can vote")
}

//else if practice 1
let marks = 80 
// let marks = 30;
if(marks >= 80){
    console.log("GRADE 'A'")
}else if(marks >= 60 ){
    console.log("GRADE'B'")
}else if(marks >= 45 ){
    console.log("GRADE 'C'")
}else if(marks < 33){
    console.log("GRADE 'fail'")
}

// if else practice 2

// let month = "jan"
let month = "dec"

if(month ==="jan"){
    console.log("winter is here")
} else if(month ==="may"){
    console.log("summer is here")
}else if(month === "dec"){
    console.log("again winter is comming")

}


// else practice 1
let ram = 23
if(ram > 18){
    console.log("ram. you alizible for vote")
}else{
    console.log("ram. you can not vot")
}

// else practice 2

let shauryaMarks = 100
if(shauryaMarks > 70){
    console.log("shaurya got selected ")
}else{
    console.log("you are not selected")
}



// Comboined Practice of (if, else if, else) 

// let traficLight = "red"
let traficLight = "white"

if(traficLight === "red"){
    console.log("STOP")
} else if(traficLight === "yellow"){
    console.log("GO SLOW")
}else if(traficLight === "green"){
    console.log("PLEASE GO")
}else {
    console.log("Trafic light is broken")
}



//praction question

let popcornSize = "XL"
// let popcornSize = "L"
// let popcornSize = "M"
// let popcornSize = "S"

if(popcornSize ==="XL"){
    console.log("price is Rs.250");
}else if(popcornSize === "L"){
    console.log("price is Rs.200");
}else if(popcornSize === "M"){
    console.log("price is Rs.100")
}else{
    console.log("price is Rs.50")
} 


// practice question

let tony = "23"
if(tony > 23){
     console.log("you are over the age")
}else if(tony >= 25){
    console.log("you are over the age")
}else if(tony == 27){
    console.log("you are not alezable")
}else if(tony === "23"){
    console.log("hellow you may now loged in")
}else{
    console.log("hello you are proxy candidate thats why you cant logged in")
}

// nestade if and else

let reportCardMarks = 45

if(reportCardMarks >= 33){
    console.log("pass")
    if(reportCardMarks >= 80){
        console.log("grade : O")
    }else{
        console.log("grade: A")
    }
}else{
    console.log("better luck next time")
}



let code = "remo"
if(code > "rem"){
    console.log("wrong character")
    if(code =="remo"){
        console.log("wright code")
    }else if(code === 41){
        console.log("code" )
    }else{
        console.log("red")
    }
} else{
    console.log("green")
}