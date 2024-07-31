// OBJECTS LITERlA:- uUSED TO STORE KEYED COLLECTIONS & COMPLEX ENTITIES.

// PROPERTY :- (key, value) pair

// OBJECT :- Objects are a collection of properties.


// example:-1


let student = {
    name : "shaurya singh",
    age : 24,
    marks : 94.5,
    college : "maharaja college ara",
    city : "arrah"

}

console.log(student)
console.log(typeof student)

// ex:-2 
// we can store arry in object 

let items = {
    name : "t-shirts",
    price : 385,
    discount: 10,
    colors : ["red","neon"]


}
console.log(items)
console.log(typeof items.colors)


// ex:-3

let post ={
    username : "@shaurya007",
    content : "this is my #firstPost",
    like : 150,
    repost: 5,
    tags : ["@ngolu_bhaiya","@akashdeep_singh"]

}

console.log(post)
// accessing with squar bracket

console.log(post["username"]);
console.log(post["content"]);
console.log(post["repost"]);
console.log(post["tags"]);

// with daut notation

console.log(post.content);
console.log(post.repost);
console.log(post.username);
console.log(post.tags);


// js automatically convrts objects keys to strings.

let obj = {
    1 : "a",
    2 : "b",
    null : "c",
    true : "d",
    undefined : "e"
}
// js , all keys items converted in strings
console.log(obj);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[true]);


// how to add and change key ,propertys and value

let teacher= {
    name : "hitesh chaudhary ",
    age : 46,
    marks :97.5,
    institute : "chai aur code",

}
console.log(teacher);

// how to add and change value

teacher.name ="shardha khapra"
teacher.age ="36"

console.log(teacher);

// how to add property

teacher.gender = "male"
teacher.instaUserName = "@hiteshchaudhri__007"
teacher.email = "hiteshchaudhry@456.com"
console.log(teacher);

// how to edit values

teacher.gender = "female"
teacher.mail = "apnacollege@35gmail.com"
teacher.instaUserName = "@shardhakhapra00187"

console.log(teacher);

// we can add or, edit also arry

teacher.marks = [90,95,99.05]
console.log(teacher);

// how to delete properties 
delete teacher.city //city key is remove
console.log(teacher);


// pectice :-4

let object = {
    name :"hitesh_chaudhary",
    age : 50,
    email : "hitesh@google.com",
    contact : 1234864683,
    city : "jaipur",
    marks : [98,96,97],
    college : "jaipur university"

}

// we can change the value any vlaue in objejct 

console.log(object);
object.name = "shaurya_singh"
object.age = 24
object.email = "shaurya168@gmail.com"
object.contact = 6206807909
object.city = "arrah"
object.marks = [75,68,70]
object.college = ["sb_collage_ara","maharaja_collage_ara"]
object.city = "arrah"
object["city"] ="benguluru"

delete object.city
delete object.age
delete object.contact

console.log(object);

