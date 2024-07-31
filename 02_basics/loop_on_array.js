//LOOP ON ARRAY


// let fruits = ["apple","orange","mango","carrot","lichii"]
// for(let i = 0;i < fruits.length;i++){
//     console.log(i,fruits[i])
// }


// reverse for loop with aray

// let arr = ["s","l","k","g","i"]
// for(let i = arr.length-1; i > 0; i-- ){
//     console.log(i,arr[i])
// }



// let fruits2 = [["apple","orange","mango"],["carrot","litchi","grapes"],["strawberry","gvabha","lemon"]]

// for(let i = 0 ; i<fruits2.length; i++){
//     console.log(i)
//     for(let j = 0; j<fruits2.length; j++){
//         console.log(fruits2[i][j])
//     }
// }


let hero =
 [
    ["ironman","spiderman","thor"],["superman","wonderwomen","flash"]
]

for(let i=0; i < hero.length; i++){
    console.log(i, hero[i], hero[i].length)
    for(let j = 0; j < hero[i].length; j++){
        console.log(`j=${j}, ${hero[i][j]}`)
    }
}




//FOR OF LOOP ON ARRAY

// eg-1
let item = ["apple","orange","mango","carrot","lichii"]

for(fruits of item){
    console.log(fruits)

}

// eg-2

let boy = ["golu","shaurya","akash","vishal","shubham","ankit","shivam","jhagru","abhi","chhotan"]

for(team of boy){
    console.log(team)
}


// FOR OF LOOP ON STRING 
// // eg-1
// for(char of "shauryasingh"){
//     console.log(char)
// }

// // eg-2
// for(college of "apna college"){
//     console.log(college)
// }



// NESTeD FOR OF LOOP
// eg-1
let girl = [["archna","shardha","renuka"],["siwani","mohani","swati"]]

for(list of girl){
    for(name of list){
        console.log(name)
    }
}

// eg-2 

let heros = [["ironman","spiderman","thor"],["superman","wonderwomen","flash"]]

for(list of heros){
    for(hero of list)[
        console.log(hero)
    ]
}

// eg-3


let block = [["alok","prachi","radha"],["yellow","pink","neon"]]

for(list of block){
    console.log(list);
}

// eg-4

for(list of block){
    for(group of list){
        console.log(group)
    }
}



console.log("for loop");

for(let  rsm= 1; rsm<= 10;rsm++){
    console.log(rsm);
}
 console.log("its do while loop");
let rubi = 20

while(rubi <= 100){
    console.log(rubi)
    rubi = rubi + 5
}



// for of loop 

console.log("for of loop");

let bhirwa = ["buji","kalki","damiyanti","lejend"]
for(listof of bhirwa){
    console.log(listof)
}

// neste for of loop
console.log("nested for loop");
 let bhirwaTeam = [["buji","kalki","damiyanti","lejend"],["aswathama","thegreatmodel","kali","theking"]]


for(newTeam of bhirwaTeam){
    for (bhaiwa of newTeam) {
        console.log(bhaiwa)
    }
}


//switch case

let month = "march"

switch(month){
    case "jan" :
    console.log("its winter")
    break;
    case "fab" : 
    console.log("light winter")
    break;
    case "march": 
    console.log("it is right answer,, the hindu newyear is coming ")
    break
    default : 
    console.log("monsoon is on the way")
}


let round = [["buji","kalki","damiyanti","lejend"],["aswathama","thegreatmodel","kali","theking"]]

for(i = 0;i < round.length ; i++){
    console.log(i,round[i],round[i].length)
    for(j = 0; j < round[i].length;j++)
        console.log(`j = ${j},${round[i][j]}`);
}

for (let l = "5" ;l >=0; l--){
    console.log(l);
} 