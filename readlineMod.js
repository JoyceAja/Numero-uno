var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
// can also
// function parseInput(input){
//     console.log('your input was: ' + input)
// }
// r1.on('line', parseInput)

//   rl.on('line', function(input) {  // anonymous function (a one time callback)      
//     console.log('your input was: ' + input)
//   })
  
// var sum = 0
// rl.on('line', function(input) {
//   var numb = Number(input)
//   if(!isNaN(numb)){
//     sum +=numb
//     console.log(sum)
//   }
// })

rl.on('line', function(input) {
  var numb = Number(input)
  if(!isNaN(numb)){
    sum +=numb
    console.log(sum)
  }
})
