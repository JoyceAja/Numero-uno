// function Dog(name, breed, weight){
//     // create this = {}
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     // return this
// }

//new Dog('Charlie', 'Mixed', 38)
// different how?
//var pluto = new Dog('Charlie', 'Mixed', 38)
//factory functions return an object
//constructor function creates an object
//console.log(pluto.name)
//every function has qa prototype
// function rabbit() {}

// console.log(rabbit.prototype)
// console.log(rabbit.prototype.constructor === rabbit) // look at the table in your bk //doesnt make sense

function Rabbit(type){
    this.type = type;
}

var killerRabbit = new Rabbit('killer');
// var kr = {
//     type: 'killer'
// }
// }
// console.log(kr)
//console.log(killerRabbit)
// Rabbit.prototype.speak = function(){
//     console.log('hello')
// }
var killerRabbit = new Rabbit('black')
var purpleRabbit = new Rabbit('purple')
Rabbit.prototype.speak = function(){
    console.log('I am a killer rabbit') //This doesnt overlap instead it save those 
}                                       //proerties can be called
Rabbit.speak = function() {
    console.log('I am a rabbit')        //Each object can add more than prototype but not the same property
}
Rabbit.speak()
Rabbit.prototype.speak()
console.log(purpleRabbit.__proto__ ) //can use Object.getPrototypeOf(purpleRabbit)

//If you add [a property] to 