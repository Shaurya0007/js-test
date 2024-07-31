// ARRAY(Data Structure) :- liner(sidhi line me ) collection of things (collection of different items) 

// normal data type 
// let student1 = "ram"
// let student2 = "sita"
// let student3 = "shyam"

// Array

let students = ["thor","ironman","hulk","captionAmerica","doctorStrange"]
console.table(students);
console.log(students);

// data visualize

let num  = [1,2,3,4,5]

console.table(num);
console.log(num);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

let name = ["krish","shaktiman","thor","ironman","hulk","captionAmerica","doctorStrange"]

console.log(name[0]);
console.log(name[2]);
console.log(name[5]);
console.log(name[6]);
console.log(name[3]);
console.log(name[1]);
console.log(name.length);
console.log(typeof name);

// creating types of array

let number = [8,66,64,44,77]  // number types array
let string = ["adam","bob","arastu","shiva"]  //string types array
let mixed = ["adam",56,"arastu",75,66,"shiva"] //mixed array
let emtAry = []


console.log(number[2]);               //checking index
console.log(number.length);           // checking length
console.log(string[0]);               //checking index
console.log(string[3]);               //checking index
console.log(string[3].length);        // accessing individual index length 
console.log(string.length);              //checking index
console.log(mixed[3]);                  //checking index
console.log(mixed.length);              // checking length
console.log(typeof mixed.length);       // checking typeof 
console.log(emtAry.length);             // empty string length 
console.log([123,123,456,465]);         // directly putting value in array without variables

console.log(string[3].length);          // accessing individual index length   



// ARRAY ARE MUTABLE  :- WITHOUT PASSED VARIABLE  WE CAN ANY CHANGES IN ORIGINAL VALUE


let fruits = ["mango" , "grapes", "lichi","muskmelon"]
console.log(fruits);

fruits[0] = "banana"

console.log(fruits); // ['banana','grapes','lichi','muskmelon']  we can change original value of array

console.log(fruits[0]);

fruits[10] = "papaya"
console.log(fruits[10]); // value is stored (10+1 => 11 ) 11th position 