
// PRACTICE -1
//  write an arrow function that return the squre of a number 

// EX-1
let newFun  = (n)=>(n*n)
console.log(newFun(5)); 
console.log(newFun(10)); 

// EX-2

let squareNum = (n)=> n*n
console.log(squareNum(10));


// practice :-2
// write a function that prints "hello World" 5 times at intervals of 2s each 


// let id = setInterval(()=>{
//     console.log("hello ji");
// },2000)

// we can create a set time out in 10 sec because (2 * 5 = 10sec) and the pass the clear interval 

// setTimeout(()=>{
//     clearInterval(id)
//     console.log("clear interval ran");
// },10000)



// let id2 = setInterval(() => {
//     console.log("i love you");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id2)
//     console.log("enough ! thats it,");
// },10000)



let  id3 = setInterval(()=>{
    console.log("hey how are you")
},3000)

setTimeout(()=>{
    clearInterval(id3)
},15000)


