//forEach :- runs induvisually every call back method
// ex-1
let arr  = [1,2,3,4,5,6,4,56,6,5,5,5,0,5,]

let print = function(el){
    console.log(el);
}

arr.forEach(print)


// ex -2

let arr2 = ["thor","reha","gym","boy","itswork"]

arr2.forEach((el)=>{console.log(el);})

// ex-3

let arr3 = ["thor","ironman","hockeye","wanda"]

arr3.forEach((el)=>{
    console.log(el);
}) 

// ex-4

let teachers = [
    {
        name: "shardha",
        age : 23,
        marks : 95.6
    },
    {
        name: "mosh",
        age : 45,
        marks : 95.6
    },
    {
        name: "rahmat",
        age : 23,
        marks : 95.6
    },
    {
        name: "shiva",
        age : 25,
        marks : 95.6
    },
    {
        name: "aman_dharwal",
        age : 25,
        marks : 95.6
    },
]

teachers.forEach((el)=>{
    console.log(el.name,el.marks ,':-',el.age);
    // console.log(el.name);
    // console.log(el.marks);
    // console.log(el.age);
})

// Map
// same as a forEach method  but this method is return a new arry

let greatArry = [1,2,3,4,5]

let newArr = greatArry.map(function(el){
    return el*2
   
})
 console.log(newArr);

 

 
let students = [
    {
        name: "rahul",
        age : 23,
        marks : 95.6
    },
    {
        name: "shaurya",
        age : 45,
        marks : 95.6
    },
    {
        name: "aman",
        age : 23,
        marks : 95.6
    },
    {
        name: "shiva",
        age : 25,
        marks : 95.6
    },
    {
        name: "ali",
        age : 25,
        marks : 95.6
    },
]

// ex:-1
// students.map((el)=>{
//     console.log(el);
//     console.log(el.name);
//     console.log(el.marks);
//     console.log(el.age);

// })

let gpa = students.map((el)=>{
    return el.marks / 10
})
console.log(gpa);



// FILTER : this function returns a new array  // this method filtering the element which passing you in method

let newMetod = [1,2,5,4,8,6,3,5,12,48,,7,88,74,7,5,658,21,20,125,365,35231,331,32,2,0]

let newOEn =   newMetod.filter((el)=>{
    // return el % 2 == 0 // EVEN
    // return !(el % 2 == 0 ) //ODD
    // return el <  10 //lessthan
    return el >  10 //  gretherthan
    
})

console.log(newOEn);  // PRINT ODD/EVEN NUMBERS



//  forEach
let array = ["hey","string","bind","like","lemo"]

array.forEach((el)=>{
    console.log(el)
})

let onjAr = [
    {
        name : "shardha",
        age : 24,
        collage : "maharja collage arrah"
    },
    {
        name : "shardha",
        age : 24,
        collage : "maharja collage arrah"
    },
    {
        name : "shardha",
        age : 24,
        collage : "maharja collage arrah"
    },
    {
        name : "shardha",
        age : 24,
        collage : "maharja collage arrah"
    },
]

let fo = onjAr.forEach((el)=>{
    // console.log(el.age); 
    return el 
})



// map

let art = ["hello","thats","lelo","shila","hila"]

let aim = art.map((el)=>{
    return el;
})



let filt = [1,2,3,5,,8,,7,9,3,13,1,31,55,66,55]

let newFI = filt.filter((el)=>{
    // return el%2 == 0
    return !(el%2 == 0)
})
console.log(newFI);

//  filter json formate
 let filt3 = [{
    name : "shardha",
    age : 24,
    collage : "maharja collage arrah",
    marks : 95.2

},
{
    name : "shardha",
    age : 24,
    collage : "maharja collage arrah",
    marks : 95.25,
},
{
    name : "shardha",
    age : 24,
    collage : "maharja collage arrah",
    marks : 95.4
},
{
    name : "shardha",
    age : 24,
    collage : "maharja collage arrah",
    marks : 95.6
},
]


let gpa3 = filt3.map((el)=>{
    return el.marks / 10
})

console.log(gpa3);



// REDUCE :- it returns to true value

 let arr8 = [1,2,3,4,5]

 let red= arr8.reduce((acc,curval,)=>{
    console.log(acc,curval);
    return curval + 10
 },0)

 console.log(red);


 let language   = [
    { course : "wev dev",
        price : 8222,
    },
    { course : "app dev",
        price : 12000,
    },
    { course : "phy",
        price : 222,
    },
    { course : "java",
        price : 5000,
    },

 ]

 let armani = language.reduce((acc,curVal)=>{
    return acc + curVal.price

 },0)

 console.log(armani);



// ex:-1  using reduse found a maximum no of array 

let maxArr = [1,2,3,,5,6,7,5,8,8,88,54,] 

let foundMax = maxArr.reduce((max,el)=>{
    if(el>max){
        return el
    } else{
        return max
    }
})
console.log(foundMax);



// filter 

//  let x = [5,6,4,7,8,9,8] 
//  let y = x.filter((el)=>( el > 5 ))
//  x.filter((el)=>(el>=7))

//  console.log(y);

// every
//  let e = [2,4,6,4,8]

// let i = e.every((el)=>(
//     el%2 == 0
// ))

// console.log(i);

// practice questions 
// check if all numbers in our array are multiples of 10 or not

let num = [10,20,30,40,50]

let newNum = num.every((el)=>{
    return el%10 == 0
})

console.log(newNum);


// forEach

let jem = [1,2,3,5,4,5,]
jem.forEach((val)=> {console.log(val*val);})

// map :- returns a new array value in a array 

let a = [1,2,5,4,6,4,6,8,6,]

let re = a.map((el)=>{
    return el*2
})
console.log(re);


// filter :- returns only truthy value

let shay = [23,3,4,5,6,6,4]
let max = shay.filter((el)=>{
    return el < 5 
})
console.log(max);


;

//reduce 

let redu = [
    {
        name : "web dev",
        price : 4229
    },
    {
        name : "devops",
        price : 10229
    },
    {
        name : "app dev",
        price : 5229
    },
    {
        name : "dsa",
        price : 12229
    }
]

let add = redu.reduce((acc,val)=>{
    console.log(`${acc},${val}`);
    return acc + val.price 
},0)
console.log(add);


// ex - 4
// 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10 ;
let element = [1,2,3,4]
let rdElement = element.reduce((res,curr)=>{
    return res + curr
})

console.log(rdElement); // 10

// found largest no of an array using reduce method 

let no = [1,5,3,6,7,2,4] 

let foundLarg = no.reduce((acc,curr)=>{
    console.log(`${acc},${curr}`);
    return acc > curr ? acc : curr ;   //ternary operator
})

console.log(foundLarg);


// found the smallest no of an array
    
let no2 = [1,5,3,6,7,2,4] 

let foundSmall = no2.reduce((acc,curr)=>{
    console.log(`${acc},${curr}`);
    return acc < curr ? acc : curr ;
})

console.log(foundSmall)

// practice 1

// we are given array of marks of students filter out  of the marks of students that scored 90+

let newArr2 = [87,82,90,92,95,96,74,52]
let coutArr = newArr2.filter((val)=>(val >= 90 ))
console.log(coutArr);

// practice :-2 
//  take a number n as input from use create an array numbers from 1 to n  
//  use the reduce method to calculate sum of all numbers in the array  .
//   use the reduce method to calculate product of all numbers in the array 


// let n = prompt("PRINT ANY NUMBER")
// let arr5 = []
// for(let i = 1; i <= n; i++ ){
//     arr5[i-1] = i 
// }

// console.log(arr5);

// let sum = arr5.reduce((acc,curr)=>{
//     return acc+curr

// })
// console.log(sum);


// practice = 2 

// //

// let n1= prompt("print any number")

// let arr4  = []
// for(let i = 1; i = n1; i++){
//     arr4[i-1] = i 
// }

// console.log(arr4);

// let reduceM = arr4.reduce((res,curr)=>{
//     return res + curr
// })

// console.log(reduceM);


// // ever

let king = [2,4,6,8].every((el)=>el%2==0)
console.log(king);

// print max no 
  
let gra = [1,2,,6,56,5,6,4,6,4,6,,6,2,51,3,1]

function getFUN(gra){
    let gym = gra.reduce((min,el)=>{
        if(min > el){
            return min 
        }else {
            return el
        }
    })
    return gym
}


console.log(getFUN(gra));


console.log(getFUN([4,5,,9,26,56394,656,232332]));


