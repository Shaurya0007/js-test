// nested object :- storing information of multiple students 
// or, object of object

let classInfo ={
    aman  :{
        grade :"A+",
        city : "DELHI"
    },
    shardha  :{
        grade : "A",
        city : "HARIANA "
    },
    shaurya  :{
        grade : "B",
        city : "ARRAH"    
    },
    
} 

// how to accessing properties

console.log(classInfo.aman)
console.log(classInfo.shardha)
console.log(classInfo.shaurya)

// edit and delete items

classInfo.aman.grade = "A++"
classInfo.shardha.grade = "A+"
classInfo.shaurya.grade = "A"

//add keys
classInfo.aman.state = "bihar"  

console.log(classInfo.aman);

// get or, access all itmes

console.log(classInfo)


let studentInfo = {
    hitesh : {
        age:  40 ,
        gender:"male",
        contact : 6200450125,

    },
    aman: {
        age:  40 ,
        gender:"male",
        contact : 6200450125,

    },
    shardha : {
        age:    28,
        gender: "female",
        contact:  9122554655 ,
    },
    shubham: {
        age: 25,
        gender: "male",
        contact:  8756585658,
    },
    akashdeep : {
        age:  25,
        gender: "male",
        contact : 6206807909,
    },
    vishal : {
        age:  25,
        gender: "male",
        contact: 6200658945 ,
    },
    shaurya : {
        age: 24,
        gender: "male",
        contact :6206807909,
    },

}

console.log(studentInfo.shardha)
console.log(studentInfo.vishal)
console.log(studentInfo.akashdeep)
console.log(studentInfo.shubham)
console.log(studentInfo.aman)
console.log(studentInfo.shaurya)
console.log(studentInfo)




// todo

// let list = []
// let req = prompt("please enter your request")

// while (true){
//     if(req == "quit"){
//         console.log("you quit")
//         break;
//     }
//     if(req == "list"){
//         for(let i = 0; i < list.length; i++){
//             console.log(i,list[i])
//         }
//     }else if(req == "add"){
//         let task = prompt(" please enter your request you want to add")
//         list.push(task)
//         console.log("task added")
//     } else if(req == "delete"){
//         let idx = prompt("please enter your request you want to delete")
//         list.splice(idx,1)
//         console.log("task deleted")
//     }else{
//         console.log("wrong request please try again")
//     }
//     req = prompt("enter your request")
// }


// guessing number
