// Question 1
// Write a function named and with parameters x and y. 
// Your function should return true if x and y are both true, 
// and otherwise return false.
// Invoke your function with the arguments true and true.
// Invoke your function with the arguments 'happy string' and [ ] (empty array).

// function isEqual(x,y){
//     if(x === y){ // do not need an if statement, use return x && y instead
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isEqual(true, true))
// console.log(isEqual('happy string', []))

// Question 2
// Write a function named addOnlyNumbers with parameters foo and bar. 
// If foo and bar are both of type "number", return the result of foo plus bar. 
// If foo and bar are not both numbers, return NaN.
// Invoke your function with arguments 5 and Math.PI.
// Invoke your function with arguments 'fidget spinner' and 22.

// function addOnlyNumbers(foo, bar){
//     if(typeof(foo) === 'number'&& typeof(bar) === 'number'){
//         return foo + bar
//     }else{
//         return NaN
//     }
// }

// console.log(addOnlyNumbers(5, Math.PI))
// console.log(addOnlyNumbers('fidget spinner', 22))


// Question 3
// Write a function isAllNum with parameter arr. 
// If every element of arr is of type number, return true. Otherwise, return false.
// Invoke your function with the argument [1, 2, 3, 4, 5].
// Invoke your function with the argument [1, 2, 'mountain dew'].

// function isAllNum(arr){
// var arrValue = []
//     for(var i=0; i<arr.length; i++){
//         if(typeof(arr[i])=== 'number'){
//             arrValue.push(true)
//         }
//         else{
//             arrValue.push(false)
//         }
//     }
//     return arrValue
//     }
    
//     //return true

// console.log(isAllNum([1, 2, 3, 4, 5]))
// console.log(isAllNum([1, 2, 'mountain dew']))

// Question 4
// Write a function forceAllNum with parameter arr.  
// Convert every element of arr that is of type number to the value 0 and return arr.
// Invoke your function with the argument [1, 2, 3, 4, 5].
// Invoke your function with the argument [1, 2, 'mountain dew'].

// function forceAllNum(arr){
//     for (var i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) === 'number')
//         {
//             arr[i] = 0
//         }  
//     }
//     return arr
// }

// console.log(forceAllNum([1, 2, 3, 4, 5]))
// console.log(forceAllNum([1, 2, 'mountain dew']))

// Question 5
// Write a function makeVowelsHyphens with parameter s. 
// If s is not a string, return undefined. If s is a string, 
// convert every vowel (a, e, i, o, u) into a hyphen (-) and return that string.
// Invoke your function with the argument 'tuesday is my favorite day'.
// Invoke your function with the argument { isString: false, isObject: true }.

// function makeVowelsHyphens(s){
//     var newS= ''
//       if(typeof(s) === 'string'){
//           for (var i = 0; i< s.length; i++){
//               if(s[i]==='a'||s[i]==='e'||s[i]==='i'||s[i]==='0'||s[i]==='u'){
//                   newS+= '-'
//               }    
//               else{
//                 newS+=s[i]
//               }
//     //       }
//     //   }else{
//     //       return undefined
//       }
//       return newS
//   }
// }
//   console.log(makeVowelsHyphens('tuesday is my favorite day'))
//   console.log(makeVowelsHyphens({ isString: false, isObject: true })

// Question 6
// Write a function hasPropertyTacos with one parameter, loljk. 
// If loljk is an object with a defined property "tacos", return true. 
// Otherwise, return false.
// Invoke your function with argument { name: 'Cody', tacos: 'so many tacos' }.
// Invoke your function with argument 'i am not even an object'.

// function hasPropertyTacos(loljk){
//     console.assert(typeof(loljk)=== 'object', "please input an object")
//     var arr = Object.keys(loljk)
//      for(var i=0; i<arr.length; i++){
//          if(arr[i] === 'tacos'){
//             var ans = true
//          }else{
//                var ans = false
//            }
//         }
//          return ans
//     }
    


// console.log(hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' }))
// console.log(hasPropertyTacos('i am not even an object'))

// Question 7
// Write a function hasPropertyGeneric with two parameters, bigO and littleP. 
// If bigO is an object with a defined property littleP, return true. Otherwise, 
// return false.
// Invoke your function with arguments { name: 'cody', tacos: 3 } and 'tacos'.
// Invoke your function with arguments { name: 'cody', tacos: 3 } and 'sandwiches'.


// function hasPropertyGeneric(bigO,littleP){
//     //console.log(bigO.tacos)
//     var arr = Object.keys(bigO)
//     for(var i=0;i<arr.length; i++){
//         if(arr[i] === littleP){
//             var value = arr[i]
//             console.log(bigO.value)
//             if(bigO.value!== undefined){
//                 return true
//             }
//             else{
//                 return false
//             }
//         }
//     }
    // for(var i = 0; i < arr.length; i++){
    //     if (arr[i] !== undefined){
    //         return true
    //     }
    //     else{
    //         return false
    //     }
    // }
//}

// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 },'tacos'))
// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 },'sandwiches'))

// Question 8
// Write a function convertVowelsGeneric with parameters str and sub. 
// If str or sub is not a string, return undefined. If str and sub are strings, 
// replace every vowel (a, e, i, o, u) in str with sub return that string.
// Invoke your function with the argument 'tuesday is my favorite day'.
// Invoke your function with the argument { isString: false, isObject: true }.

// function convertVowelsGeneric(str,sub){
//     var newString = ''
//     if (typeof(str)!== 'string'|| typeof(sub)!=='string'){
//         return undefined
//     }
//     else{
//         for(var i=0; i<str.length; i++){
//             if(str[i]=== 'a'||str[i]=== 'e'||str[i]=== 'i'||str[i]=== 'o'||str[i]=== 'u'){
//                 newString+=sub
//             }
//             else{
//                 newString+=str[i]
//             }
//         }
//     }
// return newString

// }
// console.log(convertVowelsGeneric('tuesday is my favorite day','apple'))
// console.log(convertVowelsGeneric({ isString: false, isObject: true }, 'wrong'))

// function firstString(arr){
    
//          for(var i = 0; i < arr.length; i++){
    
//               if(typeof arr[i] !== 'string'){
    
//                   return undefined
    
//               }
    
//           return arr[i]
    
//     }
// }

//     console.log(firstString(['happy', 'not!']));
