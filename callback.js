// function forEachElem(arr, callback){
//     for(var i = 0; i<arr.length; i++){
//         callback(arr[i])
//     }
// }

// function log(element){
//     console.log(element)
//     }

// function logEachElem (arr){
//     forEachElem(arr,log)
// }

// logEachElem([1,2,3,4])

//Question 2
// function forEachElem(arr, callback){
//     for(var i = 0; i<arr.length; i++){
//         callback(arr[i])
//     }
// }

// function log(element){
//     console.log(element + ' is a ' + typeof element)
//     }

// function logEachElem (arr){
//     forEachElem(arr,log)
// }

// logEachElem([1,'a',3,4])

// Question 3
// var i = 0;
// setInterval(function(){
//     console.log(i)
//     i = (i+1)
// }, 1000)

//Question 4

// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
 
//   function shouldIBuyThis(balance,callback){
//       if(callback(balance)){
//           return 'Sure! I\'ve got the money'
//       }else{
//           return 'Nope! Gotta keep my savings up!'
//       }
//   }

//   console.log(shouldIBuyThis(20, horribleSaver))
//   console.log(shouldIBuyThis(20, liberalSpender))
//   console.log(shouldIBuyThis(20, conservativeSpender))
//   console.log(shouldIBuyThis(101, conservativeSpender))