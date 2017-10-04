//Question 2
// Write a program that reads the user input one line at a time. 
// It would expect the user input to start with one of four mathematical symbols:
//  + - * / followed by two numbers, separated by spaces. For example: + 4 2 . 
//  The program will perform the desired mathematical operation (addition, subtraction,
//  multiplication or division) and log the result. The program will display an 
//  explanatory message if:

// 1. the operation is invalid.

// 2. The operation is not followed by the expected two numbers (with spaces)

// For example, if the user enters: * 2 3 the program will log 6.

var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
var options = '+ num num, - num num, * num num, / num num'
function add(num1, num2){
    return num + num
}
function subtract(num1, num2){
    return num1-num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}
// rl.on('line', function(operator, num1, num2) {
//     if(input[0] === '+'){
//         add(num1, num2)
//     }
//     }
//   )

//   Question 3
//   Write a program that reads the user input one line at a time. 
//   It would expect the user input to start with one of four mathematical 
// symbols: + - * / followed by numbers, separated by spaces. 
// For example: + 2 4 2 . The program will perform the desired mathematical
//  operation (addition, subtraction, multiplication or division) on all the numbers, 
//  from left to right, and log the result . 
//   The program will display an explanatory message if:
//   1. the operation is invalid.
//   2. The operation is not followed by at least two numbers (with spaces)
//   For example, if the user enters:- 6 5 1 2 the program will log -2 (= 6 - 5 - 1 - 2).
function forEachElem(arr){
    for(var i=1; i<arrlength; i++){
        return arr[i]
}
}
rl.on('line', function(input) {
    var newInput = input.split( ' ')
    if(newInput[0] === '+'){
        forEachElem(add(Number(newInput[i])))
        
    }
    else if(newInput[0] === '-'){
        forEachElem(subtract(Number(newInput[i])))
        
    }
    else if(newInput[0] === '*'){
        forEachElem(multiply(Number(newInput[i])))
    }
    else if(newInput[0] === '/'){
        forEachElem(divide(Number(newInput[i])))
    }
    else {
        console.log('Please choose a valid input')
    }
})
