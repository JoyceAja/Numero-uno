// var names = ['Ben', 'Jafar', 'Matt', 'Priya, Brian'];

// names.forEach(function(name){
//     console.log(name)
// })
//The notation used for forEach function
//Parameter is a callback function
// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);

// Array.prototype.map = function(func) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         results.push(func(this[i]));
//     }

//     return results;
// };
 var arr = [1,2,3]
// var arr2 = arr.map(function(num){
//     return num+1
// })
// var arr3 = arr.map(function(num){
//     return num*2
// })
// console.log(arr3)
// var arr2 = arr.forEach(function(num){ //forEach does not return anything //can create a new array and push
//     //always will get undefined if you try to set it equal to a variable
//     num*2
// })

// console.log(arr2)
//MAP
// Array.prototype.map = function(func){ //always create a function with forEach()
//     var results = []
//     this.forEach(function(elem){
//         results.push(func(elem))
//     })
//     return results
// }

//Filter
//Basically how it works
//Parameter is a callback function
// Array.prototype.filter = function(testFunc) {
//     var results = [];
//     for (var i = 0; i < this.length; i++){
//         if (testFunc(this[i])) {
//             results.push(this[i]);
//         }
//     })

//     return results;
// }
// var bestFilmd = films.filter(function(film){
//     return film.rating === 5
// })

// var numbers = [2,3,4,10,1]
// var numbers2 = numbers.filter(function(num){ //takes in an anonymous cb func
//     return num > 3
// })

// console.log(numbers2)


//REDUCE
Array.prototype.reduce = function(func, initialValue) {
    var counter;
    var accumulator;

    // If the user didn't pass an initial value, use the first element.
    // if (initialValue === undefined) {
    //     accumulator = this[0];
    // } else {
    //     accumulator = initialValue;
    // }
    
    // Iterate through the array, feeding the current value and the result of
    // the previous computation back into the function 
    for (var i = 0; i < this.length; i++) {
        accumulator = func(accumulator, this[i])
    }

    return accumulator;
}
















