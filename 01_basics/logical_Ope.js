// three types of logical operators
// && , || , !

// 1- && ( AND OPERATORS:-when both conditon is true theN return value is true)

// true && true // false 
// true && false //false
// false && false //false
// false && true //false

// practice queston 1


let MARKS= 75
if(MARKS > 45 && MARKS >=60){
    console.log('first')
}else {" appocing next time "}


// practice 2{nasted if else logical operator}

let marks = 75
if(marks >= 35 && marks <= 80 ){
    console.log("pass")
 if(marks >=70 && marks >=75){
        console.log('grade a')
    }else {console.log("net time better luck")}
} else{
    console.log('"net time better luck"');
}


// 2 - || ( OR,PIPE OPERATOR:-any one conditon is true then valaue is true   , when both value is false then value is false )

// true || true //true
// true || false //true
// false ||true //true
// false || false // false
// (4>3)|| (3<5) //true

//practice question 1

let Marks = 80
if (Marks < 70 || Marks >= 80){
    console.log("Grade A")
}else{
    console.log('apporching next time')
}


// 3-! (NOT OPERATOR:- RESVERS THE VALUE)

//PRACTICE-2

let  reportcardMarks = 80
if(!reportcardMarks < 45){
    console.log('Pass')
    console.log('grade A')
}

//PRACTICE 2

let reportCardMarks = 80

if(reportCardMarks > 70 && (!false)){
    console.log("pass")
}  else{
    console.log('you should go on right path')
}
// !true // false
// !false // true
// !(3<5) //true



// PRACTICE 1 (NESTED LOGICAL OPERATOR)
let age = 23

if(age > 18 && age < 25 || age >= 30){
    console.log("you can vote")
}

//PRACTICE (2NESTED LOGICAL OPERATOR)
let voteAge = 17

if(voteAge < 18 && voteAge <= 20 || voteAge >= 23 (!false) ){
    console.log('you are not eligible gor vote')
}



// PRCTICE QUESTION
//Qs:- A "Good String" is a string that starts with the letter "a" & has a length > 3. Write a Program to find if a string is good or not

let str = "ample"
if(str[0]=="a" && str.length > 3){
    console.log("good string")
}else{
    console.log(
        "bad string"
    )
}

//PRACTICE QUESTION 2; (ans :- safe)

let num  = 12

if((num%3 === 0) && ((num+1 === 15)||(num-1 === 11))){
    console.log("safe")
}else{
    console.log("unsafe")
}