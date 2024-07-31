// PUSH & POP:- 
// PUSH :- THIS METHOD USE FOR ADD TO END

let car = ["tata","maruti","honda","mahindra"]
car.push("Porsche")
console.log(car);
car.push("ferari")
console.log(car);
console.log(car.length);
console.log(car["HERA"]);
console.log(car.push("audi"));
console.log(car);


// POP :- DELETE LAST ONE WITHOUT ARGUMENT

let bike = ["hero","bajaj","yamaha","tvs","bmw"]
bike.pop()
console.log(bike);

let fruits = ["apple","grapes","mango","banana"]
fruits.pop()
console.log(fruits)

//UNSHIFT & SHIFT 

// UNSHIFT :- ADD TO START 
// practice:1

let petAnimal = ["horse","cow","dog","goat"]
petAnimal.unshift("COW")
console.log(petAnimal);

// practice:2
let hero = ["slamankhan","hritikroshan","vikkykaushal"]
hero.unshift("shushant_singh_rajput")
// console.log(hero);
console.table(hero);


// SHIFT :- DELETE FROM START & RETURN IT
// practice:1

let animal = ["camel","lion","tiger","panther"]
animal.shift()
// console.log(animal);
console.table(animal);

//  practice:2 

let superHero = ["DEADPOOL","SHAKTIMAN","KRISH","THOR","IRON_MAN","CAPTION_AMERICA","HULK","SPIDER_MAN"]

superHero.shift()
console.log(superHero);
console.table(superHero);



// real world practice
// if user wants that, when he any user blok ,then automatically user is unfollow .

let flowers = ["a","b","c","d"]
let blocked = flowers.shift()
console.log(flowers);
console.log(blocked);


// for the given starts state of an array , change it to final form using methods. 

// Q :- 1 

// start :["january","july","march","august"]
// final : ["july","jun","march","august"]

// ANS:-

let month = ["january","july","march","august"]

month.shift(),month.shift()
console.log(month);
month.unshift("jun"),month.unshift("july")
console.log(month);


// INDEX OF AND INCLUDES  (case sensitive)

// indexOf() :- this method found our value and return index (case sensitive)

let primary = ["red","yellow","blue","pink","orange"]

console.log(primary.indexOf("red"))
console.log(primary.indexOf("yellow"))
console.log(primary.indexOf("orange"))
console.log(primary.indexOf("Green"))
console.log(primary.indexOf("PINK"))
console.log(primary.indexOf("pink"))

// includes() :-this method search values and return 'BOOLEAN(ture,false) values'  (caae sensitive)

let carBrands = ["porches","volkesvegen","ferari","rangerover","jaguar"]

console.log(carBrands.includes("rangerover")) 
console.log(carBrands.includes("jaguar")) 
console.log(carBrands.includes("foxvegen")) 
console.log(carBrands.includes("porches")) 
console.log(carBrands.includes("RANGEROVER")) 
console.log(carBrands.includes("Jaguar")) 



// CONCAT :- THIS METHOD USE TO MERZ 2 ARRAYS (do not chang in original array )

// concat()

// practice -1 
 let furniture = ["table","chair","benches","desk"]
 let stationary = ["book","pen","copy","pencil"]
 
console.log(furniture.concat(stationary)); 
console.table(furniture.concat(stationary))
console.log(stationary.concat(furniture));
// practice -2 

let boy = ["rewa","sam","yogi","guru"]
let girl = ["perry","klaver","moni","sefali"]

console.log(boy.concat(girl));
console.table(boy.concat(girl));   
console.log(girl.concat(boy));  

//value store in new array 
let boyGirl =  boy.concat(girl)
console.log(boyGirl);


// REVERSE :-  THIS METHOD USE REVERS AN ANY ARRAY (// chage in original array)

// reverse()
// practice 1

let reverseArray = ["rewa","sam","yogi","guru"] 
// console.log(reverseArray.reverse());
console.table(reverseArray.reverse());

// practice 2

let sportsKit = ["jersy","ad","pad","globes","ball","bat"]
// console.log(sportsKit.reverse());
console.table(sportsKit.reverse());  
console.log(sportsKit);




// SLICE METHOD :- COPY A PORTION OF AN ARRAY

// Slice("start.val.","end val.")

let sports = ["cricket","volleyball","hockey","football","basketball","handball"]

console.log(sports.slice()); //"cricket","volleyball","hockey","football","basketball","handball"
console.log(sports.slice(2));  // hockey
console.log(sports.slice(2,3)); // hockey
console.log(sports.slice(2,4)); // hockey,football
console.log(sports.slice(2,5)); // 'hockey', 'football', 'basketball' 
console.log(sports.slice(2,6));  //hockey', 'football', 'basketball', 'handball'


// negative value (end to start)

let outdoorGame = ["ludo","chase","scooner","football","basketball","handball"]

console.log(outdoorGame.slice(-2)); // last 2 arry
console.log(outdoorGame.slice(-3)); // last 3 array
console.log(outdoorGame.slice(outdoorGame.length)); //[]
console.log(outdoorGame.slice(outdoorGame.length-1)); // return last array


// SPLICE METHODS :- REMOVE /REPLACE/ ADD ELEMENTS IN PLACE 

// splice:-(1,2," value","value")   //starting value and deleted count then you can adding value

 let color = ["red","yellow","blue","green","pink","white"]
 
//  console.log(color.splice(0));
 console.log(color.splice(3));
 console.log(color);
 console.log(color.splice(0,1));  // starting index and deleted count
 console.log(color)

 console.log(color.splice(1,1,"sky-blue","neon"));
 console.log(color);

 //push
 color.push("orange")
 color.push("greay")
 color.push("darkgreen")
 console.log(color);

 console.log(color.splice(3,2,"black","emeralds","purple"));
 console.log(color)

// replaces and delete

//replces

let colors = ["black","emeralds","purple","red","Salmon","Crimson"]

console.log(colors.splice(2,0,"FireBrick","DeepPink"));  
console.log(colors);

// deleted

console.log(colors.splice(4,1,"MediumVioletRed","Tomato"));
console.log(colors)


//SHOT METHOD :- ASSENDING TO DECENDING 
 //sort()

 let day = ["monday","tuesday","wednessday","tussday","friday","satrday"]

 console.log(day.sort());


 //practic -2

 let char = ["a","e","f","b","c","e"]
 console.log(char.sort())

//not a bahave like string 
//this meathod is firstly convert in string then return the value

 let number = [1,20,5,23,84,9]
 console.log(number.sort())

 //PRACTICE 1 (splice) Q:- FOR THE GIVEN STATE OF AN ARRAY , CHANGE IT TO FINAL FORM USING SPLICE

 let Month = ["january","july","march","august"]

 //first method
//  console.log(Month.splice(0,1,));
//  console.log(Month);
//  console.log(Month.splice(1,0,"june"));
//  console.log(Month);

//second method
console.log(Month.splice(0,2,"july","june"))
console.log(Month)

//PRACTICE-2 ,Q:- RETURN THE INDEX OF THE "JAVASCRIPT" FORM THE GIVEN ARRAY , IF IT WAS REVERSED

let programingLanguage = ["C", "C++" , "HTML","JavaScript" ,"Python", "Java" ,"C#", "SQL"]

console.log(programingLanguage.reverse().indexOf("JavaScript")) // 4





// ARRAY REFERENCES

let arr =['a','b','c'] 
let newArr = arr
console.log(newArr);
console.log(newArr === arr);
console.log(arr.push('d'));
console.log(arr);
console.log(newArr);
console.log(arr.pop());
console.log(arr); 
console.log(newArr)


// NESTED ARRAY
// practice -1
let num = [[1,2],[2,3],[4,5]]
console.log(num)
console.log(num[0][0]);
console.log(num[0][1]);
console.log(num[1][0]);
console.log(num[1][1]);
console.log(num[2][0]);
console.log(num[2][1]);

console.log(num[2].length) // nested array length
console.log(num[1].length) 







// PRACTICE QUESTION 
// Q:- CREATE A NESTED ARRAY TO SHOW THE FOLLOWING TIC-TAC-TOE GAME STATE

let game = [["X",null,"O"],[null,"X","O"],["O",null,"X"]]

console.log(game)
console.log(game.length);

console.log(game[0][0])
console.log(game[0][2])
console.log(game[2][2])
console.log(game[2][0])
console.log(game[1][2])
console.log(game[1][0])


// CHANGING ARRAY VALUE


// FURST METHOD

game[0][1] = "O"
console.log(game);

// SECOND METHOD USING SPLICE

// console.log(game[0].splice(1,1,"O"));
// console.log(game);



// nested array practice 2

let value = [["viral",null,"trending"],[null,"viral",null],["trending","viral",null]]

console.log(value)

console.log(value[0][1]);
console.log(value[0][0]);
console.log(value[0][2]);
console.log(value[2][1]);
console.log(value[2][0]);
console.log(value[2][2]);
console.log(value[2][3]);
console.log(value[1][0]);
console.log(value[1][1]);
console.log(value[1][2]);
console.log(value[0])

value[2][1] = "explore"
console.log(value);

