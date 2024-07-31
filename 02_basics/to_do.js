// //TO DO  LIST 
// // eg-1
// let todo = []
// let req = prompt("please enter your request")

// while(true){
//     if(req == "quit"){
//         console.log("quitting app")
//         break;
//     }

//     if(req == "list"){
//         console.log("______________")
//         for(task of todo){
//             console.log(task)
//         }
//         console.log("_______________");

//     }else if(req == "add"){
//         let task = prompt("please enter your request you want to add")
//         todo.push(task)
//         console.log("task added")

//     }

//     req = prompt("please enter your request")

// }



// // eg-2

// // TO DO WITH DELETED ITEM


// // let todoApp  = []
// // let request = prompt("please enter your request")

// // while(true){
// //     if(request =="quit"){
// //         console.log("you quit")
// //         break
// //     }

// //     if(request == "list"){
//     console.log("______________")
// //         for(let i = 0; i < todoApp.length; i++){
// //             console.log(i,todoApp[i])
// //         }
//     console.log("______________")
// //     }else if(request == "add"){
// //         let task = prompt("please enter the request you want to add")
// //         todoApp.push(task)
// //         console.log("task added")

// //     }else if (request == "delete"){
//     console.log("______________")
// //         let idx = prompt("enter the request you want to delete")
// //         todoApp.splice(idx,1)
// //         console.log("deleted item")
    
// //     }else{
// //         console.log("wrong request")
// //     }

// //     request = prompt("please enter your request");
// // }



// // EG-3

// let app = []
// let req2 = prompt("please enter your request")

// while(true){
//     if(req2 == "skip"){
//         console.log("quit the game")
//         break;

//     }
//     else if(req2 == "list"){
//         for(let i = 0; i < app.length; i++ ){
//             console.log(i,app[i])
//         }

//     }else if (req2 == "add"){
//         let task = prompt("please enter your request you want to add")
//         app.push(task)
//         console.log("task added")

//     }else if (req2 == "delete"){
//         let idx = prompt("please enter request you want to delete")
//         app.splice(idx,1)
//         console.log("task added")

//     }else{
//         console.log("wrong request")
//     }

//     req2 = prompt("please enter your request");
// }




// practice-3

let tic_tac = [];
let aagrah = prompt("please agrah kijiye ");

while(true){
    if(aagrah == "quit"){
        console.log("aap bahr hai");
        break;
    }

    if(aagrah == "list"){
        for(let i = 0 ; i < tic_tac.length; i++){
            console.log(i,tic_tac[i]);
        }

    }else if (aagrah == "add"){
        let task = prompt("apna request add kijiye");
        tic_tac.push(task);
        console.log("value add hogya hai");

    }else if(aagrah == "delete"){
        let idx = prompt("delete wala value bahriye");
        tic_tac.splice(idx,1);
        console.log("aapka anurod delete hogya hai");
        
    }else{
        console.log("aapne galat request feel kita hai")
    }
    aagrah = prompt("please agrah kijiye ");
}