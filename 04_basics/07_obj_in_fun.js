// METHODS :- ACTION THAT CAN BE PERFORMS ON AN OBJECTS
// EX:-1

const calculete = {
    add : function(a,b){
        return a + b
    },

    sub : function (a,b){
        return a - b

    },

    mul : function (a,b){
        return a * b
    },
    div : function(a,b){
        return a/b
    }
}

// ADD
console.log(calculete.add(5,5));
console.log(calculete.add(5646,35496546));

// LESS
console.log(calculete.sub(45,56));
console.log(calculete.sub(45,15));

// MUL 
console.log(calculete.mul(45,15));
console.log(calculete.mul(45,15));

//DIV
console.log(calculete.div(45,15));
console.log(calculete.div(45,15));


// TYPE TWO , DEFINED OF FUNCTION IN AN OBJECT

const calculator = {
    add(a,b){
        return a + b
    },
    less(a,b){
        return a - b 
    },
    mul(a,b){
        return a * b
    },
    div(a,b){
        return a / b
    },

    mod (a,b){
        return a % b
    }
}



// ADD
console.log(calculator.add(121,546));
console.log(calculator.add(255,546));

// LESS
console.log(calculator.less(54564,546));
console.log(calculator.less(1546,546));

// MULTIPLY
console.log(calculator.mul(121,546));
console.log(calculator.mul(11,6));

// DIVISION
console.log(calculator.div(500,50));
console.log(calculator.div(10000,10));

// MODULUS  // reminder

console.log(calculator.mod(50,4));
console.log(calculator.mod(20,3));



 



// print calculator 

let calCount = {
    add: function(a,b){
        return a + b 
    },
    sub : function(a,b){
        return a - b 
    },
    mul : function (a,b){
        return a * b 
    },
    div: function (a,b){
        return a / b
    }

}

calCount.add(23,58)
calCount.sub(23,58)
calCount.mul(23,58)
calCount.div(23,58)

// ex:-5 

let newCal = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a - b 
    },
    div(a,b){
        return a / b
    },
    mul(a,b){
        return a%b
    }
}

console.log(newCal.mul(39,3));
console.log(newCal.mul(31,3));


// THIS KEYWORD :-this keyword refers to an object that is executing the current piece of code

// THIS :- ex :- 1

let student = {
    name  : "shaurya",
    age   : 24,
    hindi : 80,
    maths : 70,
    phy   : 80,
    eng   : 67,
    getAvg(){
      
        let avg = (this.hindi + this.maths + this.eng + this.phy) / 4
        console.log(`${this.name} got avg marks ${avg}`);
        console.log(this);
    }
}

student.getAvg()

// ex :- 2
let collage = {
    name : "maharaja college ara",
    stream : ["science","arts","commerce","sports"],
    sports : 2000,
    science : 5000,
    arts : 5000,
    commerce : 4000,
     getAllStudent (){
        let allStudent = (this.sports+this.science+this.arts+this.commerce)
        console.log(allStudent);
     },
     getAvgStudent(){
        let avgInAllStream = (this.sports+this.science+this.arts+this.commerce) / 4
        console.log(avgInAllStream);
     }


}

// console.log(collage.stream[3]); access array 

collage.getAllStudent()
collage.getAvgStudent()


// TRY AND CATCH method 

// TRY:- the try statement allows tuo to define a block of code to be tested for errors while  it is being executed    // this is a testing

// CATCH :- the catch statement allows you to defIne a block of code to be executed if an error occurs in the try block   // this is execute


//  a function using like if and else formula

// ex: 1

console.log("hello")
console.log("hello")
console.log(a);

// try{
//     console.log(a);
// } catch{
//     console.log("variable a dosen't");
// }

console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")



// ex:2

console.log("hello")
console.log("hello")
// let a = 5;


//  try and using like a function


try{
    console.log(a);
} catch(err){
    console.log("variable a dosen't");
    console.log(err);
}

console.log("hello")
console.log("hello")
console.log("hello")
console.log("hello")





