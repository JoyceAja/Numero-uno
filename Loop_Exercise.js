// Write a function that takes a number as an argument and logs all the numbers, descending, between the number and 1
// function logall(num){
//     for(var i = num; i>0; i -=1){
//         console.log(i)
//     }
// }

// logall(5)

// Write a a function that takes a number as an argument, and prints all the even numbers between 0 and the number.
// function evenOrOdd(num){
//     for(var i=0; i<num; i++){
//         if(i%2 ===0){
//             console.log(i +' is even')
//         }
//         else{
//             console.log(i +' is odd')
//         }
//     }
// }

// evenOrOdd(10)


// Write a a function that takes a number as an argument, and prints all the odd numbers between 1 and the number.

// function isOdd(num){
//     for(var i=1; i<num; i++){
//         if(i%2===1){
//             console.log(i)
//         }
//     }
// }

// isOdd(20)

// Write a function that takes a number num as an argument and logs that many multiples of 9. For example, when given 5 as the argument, the function will log:

// function multOfNine(num){
//     for(var i=1; i<=num; i++){
//         console.log(i*9)
//     }
// }
// multOfNine(5)

// function assignGrade(){
//     for(var i=60; i<=100; i++){
//         if (i > 90) {
//             console.log(i+ ' is an A')
//         } else if (i > 80) {
//             console.log(i + ' is a B')
//         } else if (i > 70) {
//             console.log(i+ ' is a C')
//         } else if (i > 65) {
//             console.log(i+ ' is a D')
//         } else {
//             console.log(i+ ' is a F')
//         }
//     }
// }

// assignGrade()

// function fizzOrBuzz(){
//     for(var i=i; i<=100; i++){
//         if(i%3 === 0){
//             console.log('fizz')
//         }
//         else if(i%5 === 0){
//             console.log('buzz')
//         }
//     }
// }

// fizzOrBuzz()



// function fizzOrBuzzofFizzBuzz(){
//     for(var i=1; i<=100; i++){
//         if(i%3 === 0 && i%5 === 0){
//             console.log('FizzBuzz')
//         }
//         else if(i%3 === 0){
//             console.log('Fizz')
//         }
//         else if(i%5 === 0){
//             console.log('Buzz')
//         }
//     }
// }

// fizzOrBuzzofFizzBuzz()


function beerSong(){
    for(var i=99; i>0; i--){
        console.log(i+ ' bottles of beer on the wall,'/n)
        console.log(i + ' bottles of beer.')
        console.log('Take one down, pass it around,')
        if(i === 1){
            console.log('No more bottle of beer on the wall')
        }else
        {
        console.log((i-1) + ' bottles of beer on the wall')
        }
    }
}

beerSong()

// console.log("Alan said, \"Peter is learning Javascript\".")
// console.log("I am a \"double quoted\" string inside \"double quotes\".")

// editing on github
