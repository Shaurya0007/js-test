// ARRAY OF OBJECTS

let carList =[
    { name:  "TATA" ,
      model: "electric.ev"
    },

    { name: "MARRUTI_SUZUKI" ,
      model: "SWIFT"
    },

    { name:   "AUDI",
      model: "Audi Q3"
    },

    { name:  "BMW" ,
      model: "BMW 7 Series"
    },

    { name:   "BUGATI",
      model:  "Veyro"
    }
]

// how to accessing keys this aaray of objects
console.log(carList[0])
console.log(carList[2])
console.log(carList[3])
console.log(carList[4])

console.log(carList[2].model)
console.log(carList[1].name)
console.log(carList[0].name)
console.log(carList[3].name)
console.log(carList[3].model)

// how to edit ,or add keys 

// edit
carList[0].model = "range_rover"
console.log(carList[0]);
// add keys
carList[0].nubmer_plate = "br032121"
carList[1].nubmer_plate = "br032121"
carList[2].nubmer_plate = "br032121"
carList[3].nubmer_plate = "br032121"
carList[4].nubmer_plate = "br032121"
console.log(carList);
