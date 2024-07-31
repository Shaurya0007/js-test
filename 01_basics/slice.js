// SLICE METHOD :- THIS METHOD USE TO CUT THE STRING WHEREVER WE WANT LIKE( Return a part of original string as new string as new string )

let str = "iLoveCode"
console.log(str.slice(0,5));
console.log(str.slice(1,5));
console.log(str.slice(5));
console.log(str.slice(5,str.length));

// we can put the negative value  and slice the string index value  (str.length-num)

let value = "apnacollege"  // total 11 index =>  11 - 3 = 8 
console.log(value.slice(-1));
console.log(value.slice(-2));
console.log(value.slice(-4));
console.log(value.slice(-7));


//REPLACE ():- REPLACE OUR INDEX   (only changing the first occurrence)

let college = "maharaja college"
console.log(college.replace("maharaja","apna")); 

//apnacollege

const text  = "i Love Code"
console.log(text.replace("Love","Do")); 

// i do code

//REPEAT () :- RETURN A STRING WITH THE NUMBER OF COPIES OF A STRING ( this method used for repeating our strings )


// practice-1
let hindKaNara = " Jai Shree Ram jee"
console.log(hindKaNara.repeat(5));


let shaurya = "i write code"
console.log(shaurya.repeat(3));

let rahul = "i love code"
console.log(rahul.repeat(4));





// Q:-2 FOR predict the string -> "let name = 'apnacollege' ", predict the output for fooooeing :

let name = "ApnaCollege"  

console.log(name.slice(4,9));  //colle
console.log(name.indexOf("na")); // 2
console.log(name.replace("Apna","Our")); // OurColle

// practice 3
// separate the college part in above string & rep;ace "l" with "t" in it

console.log(name.slice(4,11),(name.replace("l","t"))); //1st method


console.log(name.slice(4).replace("l","t").replace("l","t"));  // method -2


// using replace slice method on new string 

let newString = name.slice(4)

console.log(newString);
console.log(newString.replace("l","t").replace("l","t"));

let = immutable