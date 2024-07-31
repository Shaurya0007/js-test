// default parameter 
function defP(a,b=2){
    return a + b
}

console.log(defP(5,3));

// practice :-2

function defP2(a,b=2){
    return a + b
}

console.log(defP2(5));

// this is a wrong input 

// function def(a = 2 ,b){
//     return a + b
// }

// console.log(def(2))


//  this is the write syntex 
function def2(b,a=2){
    return a + b
}

console.log(def2(2))


// SPREAD operator (...)

// practice :-1  // normal spread 

 let arr = [56,65,7,899,21,3]
 console.log(...arr); // 56 65 7 899 21 3

//  find max and min no  
console.log(Math.max(...arr)); // 899

// find min 
console.log(Math.min(...arr));

// practice :-2
// spread on string

let str = "hey there how are you "
console.log(...str);

//  practice :-3
// spread on array of string 

let str3 = [..."hello"]
console.log(str3);   //[ 'h', 'e', 'l', 'l', 'o' ]
console.log(...str3); // h e l l o

//  practice :-4
// spread on array 
// eg-1
 let sOnARR = [7,8,9,5,6,4,8,1,2,3,5,4,6,8]

 let newSOnARR = [...sOnARR]
 console.log(...newSOnARR);



//  spread on strings of array 

// type 1
let arr6 = [..."hello",..."howareyou",..."thatsgreat"]
console.log(...arr6);
console.log(arr6);
console.log(typeof arr6);


// type 2

let char3 = [[..."hello"],[..."howareyou"],[..."thatsgreat"]]
console.log(...char3,);



// practice -5

let odd = [1,3,5,7,9,11,13]
let even = [2,4,6,8,10,12,14,16]

let oddEven = [...odd,...even ]

console.log(oddEven);  // returns typesof array
console.log(...oddEven); // returns types of strings  

console.log(typeof oddEven);



// spread on objectts

let obj = {
    name : "shaurya",
    age : 24,
    marks : 86
}

console.log(obj.name,obj.age,obj.marks);
console.log({...obj.name});

// type 2 

let objLitrals = {
    name : "shaurya",
    age : 24,
    marks : 86

}

let newOBJ = {...objLitrals, gmail:"shauryagoogle.com",city: "arrah"} // you can add mant items in this obj
console.log(newOBJ);


// type3  // arry spread in objects in key value payers 
let rr = [1,2,3,4,5,6]
console.log({...rr});

// type4  // arry spread in objects in key value payers

let string = [..."hello"]
console.log({...string});


// eg : 5 

let strnew = [
    {
        name : "shaurya",
        age : 24,
        marks : 86
    },

    {
        name : "shaurya",
        age : 24,
        marks : 86
    },
    {
        name : "shaurya",
        age : 24,
        marks : 86
    }
        
]


let newStr = {...strnew}
console.log(newStr);

// add another data in object 

let addData = {...strnew, id:"122345abgug",mobile:6206807909,city:"arrah"}



// prctice 7 

let spread = [[..."Laxmi",..."Narayan"],[..."Siya",..."Ram"],[..."Radhe",..."Krishan"]]

// console.log(...spread);
let dataCopy = [...spread]
console.log(dataCopy);

// prctice 8

let spread2 = [..."Laxmi",..."Narayan",..."Siya",..."Ram",..."Radhe",..."Krishan"]

// console.log(...spread2);\
let dataC = [...spread2]
console.log(dataC);



// Rest (...) //syntex same as spread oprerator but  work is totlly uposit 

function sum (...arg){
    for(let i = 0 ; i < arg.length;i++){
        console.log("you gave us :-",arg[i]);
    }
}

sum(1,2,3,4);

// javascript inbuilt function (arguments)

function getSum(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
    // console.log(arguments.push(1));  this is gives an error  because argument is not a function only js inbuilt js collection
}

getSum(1,2,3,5);

//apply rest on reduce method

function bothOfSum(...arg){
    return arg.reduce((acc,el)=>acc + el)
}

console.log(bothOfSum(1,2,3,4,-5));


// lets create a function who returns max or min of any no of array 

// ex:1
function min (...arg){
    return arg.reduce((min,el)=>{
        return min < el ? min : el ;
    })
}

console.log(min(2,3,1,4,5));

// eg :- 2
function max(...arg){
    return arg.reduce((max,el)=>{
        return max > el ? max :el ;
    })
}

console.log(max(5,4,5,6,7,2,1,0,1,2))

//  print a message with min no using rest method 
function countMin(mess,...arg){
    console.log(mess);
    return arg.reduce((min,el)=>{
        if(min > el){
            return el
        } else {
                return min
        }
    })
    
}

console.log(countMin("hello", 2,3,2,1,3,8,40,0));

