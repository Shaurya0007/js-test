// higher order function :- A function that does one or both
// 1:- takes one or multiple functions as arguments 

// 2:- returns a function

// ex:-1

let higherOrdGreet = function (func, count){
    for(let i = 1; i<= count; i++){
        func()
    }
}

let greet = function(){
    console.log("namaste")
} 

higherOrdGreet(greet,1000)

// ex :-2 
let higherOrdFn = function(func,count){
    for(let i = 1; i <= count; i++){
        func();
    }
}

let call = function(){
    console.log("jay_shree_Sita_Ram");
    console.log("har_har_Mahadev_jee");
    console.log("Jay_shree_veer_Hanuman_jee");
}

// higherOrdFn(call,10)
higherOrdFn(function(){console.log("jai maa")},20)



// HIGHER ORDER FUNCTION return  // (FACTORY FUNCTION)

// formate

// let request = "odd"

// let factoryFuc = function(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(n%2 ==0);
//         }
//     }else if(request=="even"){
//         return function(n){
//             console.log(n%2 == 0)
//         }
//     } else{
//         console.log("wrong request");
//     }
        
//     }
//     factoryFuc()

    
    // detected even numbers
let even = function(n){
    console.log(n%2 == 0);
}

even(10)


// detected odd numbers
let odd = function(n){
    console.log(!(n%2==0))
}

odd(10)


// // ex :- 1
let oddEvenFac = function(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 ==0));

        }
        return odd
    
    }else if(request == "even"){
        let  even = function(n){
            console.log(n%2 == 0);
        }

        return even
    }
}

 let request = "odd"
 let func = oddEvenFac(request)
 console.log(func);

 request = "even"
 let func2 = oddEvenFac(request)
 console.log(func2);


//  ex:-2


let factoryFuc = function(req){
    if(req == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0))

        }
        return odd

    }else if(req == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even

    } else{
        console.log("wrong request");
    }

}


let req = "odd"

let newFunc = factoryFuc(req)
console.log(newFunc);

req = "even"
let newFunc2 = factoryFuc(req)
console.log(newFunc2)

// ex:- 3 // you can only pass return and then write function 

let factoryFuc2 = function(req2){
    if(req2 == "odd"){
        return function(n){
            console.log(!(n%2 == 0))

        }
    }else if(req2 == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else{
        console.log("wrong request");
    }   
} 

let req2 = "odd"
let newFunc3 = factoryFuc2(req2)
console.log(newFunc3);

req2 = "even"
let newFunc4= factoryFuc2(req2)
console.log(newFunc4)




// what is hireorder function 


let foundApple = (area,count)=>{
    for(let i = 0; i<=count; i++){
        area()
    }
}


function apple (){
    console.log("where are you yrr ! i,m founding you");
}

foundApple(apple,100)


//  return any number and pass

let greetingRange = function(aagrah){
    if(aagrah == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd

    } else if (aagrah == "even"){
        let even = function(n){
            console.log(n%2 ==0);
        }
        return even
       

    }else{
        console.log("wrong input");
    }
}

let aagrah = "odd"

let swami = greetingRange(aagrah)
console.log(swami);
swami(10)

let hireKING = function(allow){
    if(allow =="odd"){
       return function odd(n){
        console.log(!(n%2 == 0));
       }
    } else if(allow == "even"){
        return function even (n){
            console.log(n%2 == 0);

        }
    }else{
        console.log("wrong input");
    }
}

let allow  = "even"

let hireKING2 = hireKING(allow)
console.log(hireKING2);
hireKING2(10)