// var func = function(num){
//     return num*3
// }
// console.log(func(10))

// function times3(num){
//     var myNumber = num*3
//     return 'hello'

// }
// console.log(times3(10))
// console.log(myNumber)

//var myNumber = 2

// var num = 2

// function incNum(){
//     var num = 2
//     num += 10
//     return num 
// }

// console.log(incNum())
// console.log(incNum())
// console.log(num)

// function add(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'Numbers only please'
//     }
//     return num1 +num2
// }

// console.log(add('cat',4))


// function powerOfThree(numb){
//     return Math.pow(numb,3)
// }

// console.log(powerOfThree(3))

// function double(num){
//     return num + num
// }
//  console.log(double(3))

//Write a function that returns the largest of two numbers
//If they are equal, return the second one

// function largestNumber (num1, num2){
//     if (num1>num2){
//         return num1
//     }
//     else if(num2>num1){
//         return num2
//     }
//     else if(num1===num2){
//         return num2
//     }
// }
// console.log(largestNumber(3,2))

//Write a function named getDogAge that takes one argument: a dog's age.
//The function returns the dog's age in dog years. 
//The conversion rate is 1 human year to 7 dog years.
//Call the function and log the result.

// function getDogAge (age){
//   var dogAge = age*7 
//   return dogAge 
// }

// console.log(getDogAge(3))

//Create two functions that calculate properties of a circle, using the definitions here (Links to an external site.)Links to an external site..

// Create a function called calcCircumfrence that takes the radius as an argument and return the circumference. Call the function and log the circumference:
// Create a function called calcArea that takes the radius as an argument and returns the area.
// Create a third function circleProps that takes the radius as an argument, calls the two other functions, and logs the area and circumference. The output should look like this:

// "The circumference is ___".

//  "The area is ___".

// function calcCircumfrence(rad){
//     var circumference = Math.PI*rad*2
//     return circumference
// }
// console.log('The circumference is '+ calcCircumfrence(6))
// console.log('The circumference is '+ calcCircumfrence(6))
// var area;
// function calcArea(rad){
//      area = Math.PI*rad*rad
//     //return area
// }
//console.log('The area is '+ calcArea(6))
//console.log('The area is '+ calcArea(6))


// function circleProps(rad){
//     console.log('The circumference is '+ calcCircumfrence(rad));
//     console.log('The area is '+ calcArea(rad));
    
// }
// circleProps(6)
// var degTemp; 
// var fahTemp;
// function celciusToFahrenheit (degrees){
//     fahTemp = (degrees*1.8+32)
//     return fahTemp
// }
// console.log(celciusToFahrenheit(100))

// function fahrenheitToCelcius (temp){
//     degTemp = (temp/1.8 -32)
//     return degTemp
// }

// console.log(fahrenheitToCelcius(200))

// function convertTemperature (temp, string){
//     if (string === 'C'){
//         return fahrenheitToCelcius(temp)
//     }
//     else{
//         return celciusToFahrenheit(temp)
//     }
// }

// console.log(convertTemperature(100, 'F'))
// console.log(convertTemperature(200, 'C'))

// function square(num){
//     return num*num
// }

// function half(num){
//     return num/2
// }

// function percentOf(num1, num2){
//     return num1/num2*100
// }
// var area
// function areaOfCircle(rad){
//     area = Math.PI*rad*rad
//     return area.toFixed(2)
// }

// console.log(areaOfCircle(6))
// function doStuff(num){
//     var squaredNumber = square(num)
//     var halfNumber = half(squaredNumber)
//     var areaNumber = areaOfCircle(halfNumber)
//     return percentOf(squaredNumber, areaNumber)
// }

// console.log(doStuff(6))

// var noReturn = function (num){
//     return console.log(num + num)
//   }

//   noReturn(2)
// var words = ['one', 'two','three','four','five'];
// words.forEach(function(element) {
//     console.log(element)
//     if(element === 'one'){
//         words.shift()
//     }
// });

// var sum=0
// for(var i=1; i<=10; i+=2){
//     sum+= i
//     console.log(sum)
// }

for(var i=10; i>0; i-=1){
    console.log(i)
}





































// function stuff(name){
//     return 'Your favorite fruit is '+ name
// }
//  console.log(stuff('apple'))



// function chicken(){
//     // call egg
//     egg()
// }

// function egg(){
//     // call chicken
//     chicken()
// }

// egg()


























































