// Arrow function

const arrFun = (a,b)=>{
    console.log(a+b);
}
arrFun(55,5)


// print sub   // you can print in one line 
let sub = (a,b)=>{console.log(a-b)}
sub(10,5)

// print cube

let cube = (n)=>{
    return(n*n*n)
}

console.log(cube(2));
console.log(cube(3));
console.log(cube(5));

// power value

let power = (a,b)=>{
    return a ** b
}

console.log(power(2,4));


// ex :- 6
let self = n =>{
    return n * n * n
}


console.log(self(5));
console.log(self(20));


let para = ()=>{
    console.log("hello! how are you")
}

para()


// create shortest way in function 

let ram = (sita,laxuman)=>{
    return sita + laxuman
} 
console.log(ram(112,12));


// if we only one statment so we can  write one line code  without return key word ,, 

let rax = () => ("hello world")
console.log(rax());

let ray = n => (n*n)
console.log(ray(5,5));


// if we have only one statment we can skip parenthesis

let zem = val => "hello would"
console.log(zem());

// ex:- 7
let gun = (item , item2) => item /item2 
console.log(gun(23,128));

// ex 8
hello = val => "Hello " + val;
 console.log(hello("where are you from ")); 


// setTimeout function :- ye shirf apne limit time ke bad sirf ek bar action perform karta hai 

// console.log("hello ");

// setTimeout(()=>{
//     console.log("hello would");
// },4000)



// set interval :- ye apne limite time ke bad bar bar action perform krta hai 

// console.log("why are you goung there");
ex :-1

//   setInterval(()=>{
//     console.log("hey there");
// },2000)




// ex:- 2 

// let id = setInterval(() => {
//     console.log("kya hal chal");
    
// }, 2000);

// let id2 = setInterval(()=>{
//     console.log("jai maa");
// },5000)


// clearTimeout(id)
// clearInterval(id2)



// create a function using setInterval method

let id = setInterval(()=>{
    function all(a,b){
        return a+b
       
    }
    console.log(all(12,5)); 
},5000)



clearInterval(id)
