
// function return method

function goal(a,b){
    return a+b
}
//goal(70,50) on console ...orijinal value is same

// value lock in variable

function free (num1,num2){
    return num1 * num2
}

let val =  free(35,2)
console.log(val);

// value print by console.log()

function muntiN (n1,n2){
    return n1*n2
}
console.log(muntiN(10,5))



function sum(num1,num2){
    return num1 + num2
}

console.log(sum(sum(5,2),3))


// we can return string  value
// ex:-1
function isAdult(age){
    if(age >= 18){
        return "you can vote"
    } else {
          return "you can't vote "
    }
}

console.log(isAdult(20));

// ex:-2

function adult(age){
    if(age <= 22){
        return "you cant eligible for vote"
    }else {
        return "you can vote"
    }
}

console.log(adult(17))

// create a function that returns the sum of numbers from 1 to n
function getSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i 
    }
    return sum;
}

console.log(getSum(12))

function get(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i
    }
    return sum;
}
console.log(get(10));

// sum of any numbers

function lol (n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum;
    
}

console.log(lol(5)) 




// print a table of any numbers 

function printAny(numbers){
    console.log(`write a table ${numbers}`);
    for(let i = 1; i<= 10; i++){
        let result = numbers * i 
        console.log(`${numbers} * ${i} = ${result}`);
    }
}

printAny(10)
printAny(11)
printAny(15)


// calculate avg between  3 numbers

function avg (a,b,c){
    // return (a+b+c)/3;
    let cal = (a + b + c)/3
    console.log(cal);
}
// console.log(avg(5,2,5));
avg(5,5,5)



// // CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 



let str = ["hey ", "how are you "," i m fine ", " what about you"]

function create(str){
    let result = "";
    for (let i = 0; i < str.length; i++ ){

        result += str[i] ;  

    }

    return result;
       
}


// ex -:2

console.log(create(str));

let arr = ["my","name is shaurya"," what is your name"]

function cola (arr){
    let result = "";
    for(let i = 0 ; i < arr.length; i++){
      result = result.concat(arr[i])  
     }

    return result;
}

console.log(cola(arr));

// eg :3 // CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 

let platonicSolids = ['Tetrahedron', 'Cube', 'Octahedron', 'Dodecahedron', 'Icosahedron'];
let result = '';

for (let i = 0; i < platonicSolids.length; i++) {
    result = result.concat(platonicSolids[i]);
}

console.log(result);

// EX :4 // CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 

let  str2 = ['Tetrahedron', 'Cube', 'Octahedron', 'Dodecahedron', 'Icosahedron'];

function cont(str2){
let result = "";

for (let i = 0; i < str2.length; i++) {
    result += cont[i];

}
return result;
}

console.log(cont(str2));


// lets create a function AND CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 

function yolo (idx,idx2){
    console.log("your vlaue is ");
    return idx * idx2

}

console.log(yolo(15,10));

// CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 

let array = ["my","name is shaurya"," what is your name"]

function logo (array){
    let result = "";
    for(let i = 0; i < array.length ; i++){
       result = result + array[i]
    //    console.log(i);
    }
    return result;
}

console.log(logo(array));
// CONCAT ARRAY OF STRINGS IN FUNCTION   USING ARRAY METHOD 
// eg : 5

let random = ["radhe", "radhe", "! hare krishna govind hare murari hey namth narayan vasudeva"]

function lacha(random){
    let val = "";
    for(let i = 0; i  < random.length ; i++){
        val = val + random[i]
    }

    return val;
} 

console.log(lacha(random));


function table2 (num){
    for(let i  = 1; i <= 10 ; i++){
       let result = num * i
       console.log(result);
    }

}
console.log(table2(10));


// function hello(num){
//     for(let i = 2 ; i <= 20; i = i + 2 ){
//         console.log(i);
//     }
// }

// hello()

function pahada(num){
    for(let i = 1; i <= 10; i++){
        let result = num*i 
        console.log(`${num} * ${i} = ${result}`);
    }
}


// print any numbers of table

pahada(10);



function printAny(numbers){
    console.log(`write a table ${numbers}`);
    for(let i = 1; i<= 10; i++){
        let result = numbers * i 
        console.log(`${numbers} * ${i} = ${result}`);
    }
}


// print any number of sum

