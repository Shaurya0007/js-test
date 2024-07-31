// //  destructuring  on objects 

// let name = ["thor","tonyS","CA",'"hulk',"hockEYE","deadpool","woolvarin"]

// let [winner,runner,others] =  name   // ONLY SINGLE VALUE IS ASSINED IN OTHER VARIABLE 
 
// console.log(winner,runner,others);

// // EG:2

// let sportsMan= ["thor","tonyS","CA",'"hulk',"hockEYE","deadpool","woolvarin"]

// let [vijeta,upvijeta,...annya] = sportsMan

// console.log(vijeta,upvijeta,annya);


// // destructuring on objects 

// let student = { 
//     name1 : "karan",
//     age : 14,
//     class : 9,
//     subject : ["hindi","english","math","science"],
//     username : "karan@123",
//     password: "kar12345",
//     city : "bhojur"

// }


// let {name1 , age , username :user, password : pass, city="arrah"} = student

// console.log(name1,pass,user,city);  // note:- city ki value object ke andr wale vale value ki jada manya hogi 
 


// let studentDetails = {
//     title : "shaurya singh",
//     aayu :  24,
//     kaksha : 10,
//     subjectTOPIC :["hindi","english","math","science"], 
//     location : "ara",
//     contact : 6206807909,
     
// }

  
//     let {title,aayu,kaksha, location : place = "arrah",  contact , emailadd ="ads123@gmil.com"} = studentDetails

//     console.log(title, aayu, kaksha,  contact , place,emailadd);
    


//     // Step 1: Square and sum the array elements
//     const sumOfSquares = myArray.reduce((acc, val) =>{ 
//         // console.log(acc,val);
//        return  acc + val 
//     },0)
    
//     console.log(sumOfSquares);
//     // Step 2: Find the average
//     const average = sumOfSquares / myArray.length;
    
//     console.log("Sum of squares:", sumOfSquares);
//     console.log("Average:", average.toFixed(2)); // Rounded to two decimal places
    
//     console.log(average);


//     function max (...arg){
//         return arg.reduce((acc,min)=>{
//             return acc > min ? acc : min ;
//         })
//     }

//     console.log(max(464,4664,346,5496));


//     // 
//     const doublle = (arr,...arg)=>[
//         ...arg,
//         ...arg.map((v)=>v * 2),
//     ];

//     console.log(doublle(1,2,3));

    const myArray = [2, 3, 4];

    const doubleAndReturnArgs = (arr,...arg)=>[
        ...arr,
        ...arg.map((v)=>v *2)
    ];

    const result = doubleAndReturnArgs([1,2,3],4,4,6,7,8);
    console.log('result ', result);
    
    // doubleAndReturnArgs([2],10,4); 


    let num = [1,2,3];
    console.log(...num, 2)