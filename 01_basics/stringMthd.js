// STRING METHODS

// 1. trim()

// str.trim():-  this method remove starting and last whitespace

// js strings are immutable 


// str. trim :- creating a new spaces and remove there space 
// practice 1

let password = prompt("write your password")
let newPass = password.trim()
console.log(newPass)


// practice2

let pass = prompt("PUT YOUR FIRST 4 LATTER IF PASSWORD")
console.log(pass.trim())


// 2. toUpperCase () :- change strings in upper case 

let college = "Apna Collage"
console.log(college.toUpperCase());


// str.toUpperCase() :- change string in Lower case 

let collegeName = "apna college"
console.log(collegeName.toLowerCase());
 



//STRING METHOD WITH ARGUMENT

// formate :- str.formate(arg)

//indexOf :str.indexOf("")
// forNotFound :- (-1)

let ram = "apnacollege"

console.log(ram.indexOf("p"))
console.log(ram.indexOf("college"))
console.log(ram.indexOf(3))




// METHOD CHAINING  

//  without method chaining

let nameOne  = " ram  "
let nameTwo = nameOne.trim()
console.log("after trim",nameTwo)
nameTwo = nameTwo.toUpperCase()
console.log("after upperCase",nameTwo);


// with method chaining
let myName = "  shaurya singh  "
console.log(myName.toUpperCase().trim());



let superHero = "shaktiman"

console.log(superHero.indexOf(4));


let trim = "        viral      "

let trimTwo = trim.trim()
console.log(trimTwo);
trimTwo = trimTwo.toUpperCase()
console.log(trimTwo);


//PRACTICE QUESTION 1-:
// for give the string

let msg = "  !help  "
console.log(msg.trim().toUpperCase());

// Q:-2 FOR predict the string -> "let name = 'apnacollege' ", predict the output for fooooeing :

let name = "ApnaCollege"  

console.log(name.slice(4,9));  //colle
console.log(name.indexOf("na")); // 2
console.log(name.replace("Apna","Our")); //OurColleg