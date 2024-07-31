
// DO , WHILE LOOP
// SAME AS FOR LOOP BUT LITTLE BIT DEFERENCE  

// increasing value of while
// console.log("print (1-10) random number");
// let i = 1;
// while(i <= 10){
//     console.log(i)
//     i++
    
// }

// // increase
// console.log("print increasing value");
// let m = 0;
// while(m <= 10){
//     console.log(m)
//     m++
// }

// // decreasing value

// console.log("print decreasing value ");
// let j = 20
// while(j>=1){
//     console.log(j)
//     j--
// }

// // table of 5
// console.log("print table of five");
// let l = 5;
// while(l<=50){
//     console.log(l)
//     l = l + 5;
// }



// // create a new game that name is guessing fav. movie

 

// for(let a = 2;a <= 5 ; a=a+2){
//     console.log(`outer loop${a}`)
//     for(let b = 0 ; b <= 9; b++){
//         console.log(b)
//     }
// }

// //do while loop

// let r = 2
// while(r<=20){
//     console.log(r)
//     r++
// }

// let x = prompt("print any number")
// x =  parseInt(x)

// for(let y = x ; y <= x*10; y=y+x){
//     console.log(y)
// }

// // guess  the name of movie

// const favMovie = "thor"
// let guess = prompt("guess my favorite movie")

// while((guess != favMovie)&&(guess != "quit")){
//     guess = prompt("wrong guess ! please try agin")
// }

// if (guess == favMovie){
//     console.log("congrats! you guessed it right ")
// } else {
//     console.log("you quit !")
// }



// //guess my favorite sports name using while loop

// let favGame = "cricket"
// let guess2 = prompt("guess my favorite sports")
// while((guess2 != favGame)&&(guess2 != "quit")){
//     guess2  = prompt("wrong guess! please try agin latter")
// }

// if(guess2==favGame){
//     console.log("you guess it right ")

// }else{
//     console.log("you quit!")
// }



// BREAK KEYWORD: when we stop the loop

// eg-1
let value = 0
while(value <= 10){
    if(value==6){
        break
    }
    console.log(value)
    value++
}

// eg-2

let FavSports = "volleyball"
let giveAns = prompt("give ans. the right sports name")

while(giveAns != FavSports){
   
    if(giveAns !="quit"){
        console.log("you quit")
        break
    }
    giveAns = prompt("wrong guess")
}

if(giveAns==FavSports){
    console.log("congrats")
}


//

