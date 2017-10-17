// // Question 18
// function largestNumber(num1,num2){
//        if(num1>num2){
//                return num1
//              }
//        return num2
// }

// console.log(largestNumber(4,3))

// // Question 19
// function getDogAge(age){
//          return age*7
//     }
// console.log(getDogAge(5))

//Question 22
// function logAll(num){
//     count = num-1  
//     while(count > 1){
//     console.log(count)
//     count --
//     }
// }

// logAll(5)

//Question 23
// function evenNumb(num){
//    for(var i = num; i > 0; i--){
//        if(i%2 === 0){
//            console.log(i)
//        }
//    }
// }
// evenNumb(10)


//Question 24
// function oddNumb(num){
//     for(var i = 0; i < num; i++){
//         if(i%2){
//             console.log(i)
//         }
//     }
//  }
//  oddNumb(10)

//Question 25
// function multNine(num){
//     for(var i = 1; i <= num; i++){
//     console.log(i*9)
//     }
// }
// multNine(5)

//Question 30
// function verbing(string){  
//     if(string.includes('ing')){
//     string += 'ly'
//     }
//     else if(string.length >=3){
//     string += 'ing'
//     }
//     return string //dont forget to return something
// }
// console.log(verbing('dance'))
// console.log(verbing('singing'))
// console.log(verbing('do'))

// //Question 31
// function getInitString(string){
    
//     return string.slice(0,string.length-1) //it is minus one because the end value 
//                                           //is not included in the calculation 
    
//     }
// console.log(getInitString('jimmy'))
// console.log(getInitString('hello'))

//Question 32
// function getLast(string){
//     return string[string.length -1]
// }
// console.log(getLast('jimmy'))
// console.log(getLast('hello'))

//Question 33
// function capitalLast(string){
//     return string.slice(0, string.length-1)+string[string.length-1].toUpperCase()
// }
// console.log(capitalLast('jimmy'))
// console.log(capitalLast('hello'))

//Question 34
// function XO(string){
//     countO = 0;
//     countX = 0;
//     var val = string.toLowerCase()
//     for(var i=0; i<val.length; i++){
//         if(val[i] === 'x'){
//             countO++
//          }
//         else if(val[i] === 'o'){
//             countX++
//         }
//     }
//     if(countO === countX){
//         return true
//     }
//     return false
// }

// console.log(XO("ooxx"))    // returns true
// console.log(XO("xooxx"))   // returns false
// console.log(XO("ooXXm"))   // returns true
// console.log(XO("zpzpzpp")) // returns true because zero 'x's and 'o's are present
// console.log(XO("zzoo"))    // returns false

//Question 35
// function countVowels(string){
//     var vow= string.match(/a|e|i|o|u/ig)
//     return vow.length
// }
// console.log(countVowels("hello")) // returns 2 
// console.log(countVowels("dog says woof")) // returns 4
// console.log(countVowels("cat says meow")) // returns 4

//Question 36
// function isPalindrome(string){
//     var rev = string.split('').reverse().join('')
//     console.log(rev)
//     if(string === rev){
//     return true
//    }
//     return false
// }
// console.log(isPalindrome("racecar")) // returns true 
// console.log(isPalindrome("tattarrattat")) // returns true 
// console.log(isPalindrome("dog")) // returns false

//Question 37
// function mySubString(string,num1,num2){ 
//     var newString = ''
//     for(var i=num1; i<num2+num1; i++){
//     newString+=string[i]
//     }
// return newString
// }
// console.log(mySubString("hello world", 5, 4)) // returns " wor"
// console.log(mySubString("hello world", 3, 8)) // returns "lo world"
// console.log(mySubString("hello world", 2, 6)) // returns "llo wo"

//Question 38
// function arrLength(arr){
//     var count = 0
//     for(var i= 0; i<arr.length; i++){
//     count ++
//     }
//     return count
// }
// console.log(arrLength([1, 2, 3, 3, 2, 1]))
// console.log(arrLength(["jets", "mets", "giants", "yankees"]))

//Question 39
// function longestArr(arr1,arr2){
//     if(arr1.length > arr2.length){
//     return arr1
//     }
//     else if(arr2.length>arr1.length){
//     return arr2
//     }
//     return undefined
// }
// console.log(longestArr([1, 2, 3], [1, 2, 3, 4, 5]))
// console.log(longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]))

//Question 40
// function addTwoElements(arr,val1,val2){
//     arr.push(val1,val2)
//     return arr
// }
// console.log(addTwoElements([1, 2, 3], 4, 5))
// console.log(addTwoElements(["hello", "hi"], "hey", "what up"))

//Question 41
// function removeLastTwo(arr){
//     arr.splice(arr.length -2)
//     return arr
// }
// console.log(removeLastTwo(['dog', 'cat', 'bat', 'octopus']))

//Question 42
// function middleElement(arr){
//     if(arr.length%2){
//         return arr[Math.floor(arr.length/2)]
//     }
//     return 'Oops, there\'s no middle'
// }
// console.log(middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']))
// console.log(middleElement([1, 2, 3, 4, 5]))
// console.log(middleElement([1, "hmm", "wat", 4, 5]))
// console.log(middleElement([1, 2, 3, 4, 5, 6]))
// console.log(middleElement(["john", "paul", "george", "ringo"]))

//Question 43
// function everyThird(arr){
//     var newarray = []
//     for(var i=2;i<arr.length; i+=3){
//     newarray.push(arr[i])
//     }
//     return newarray
//     }
//     console.log(everyThird(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))
//     console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) )

// //Question 44
// function doubleTrouble(arr){
//     return arr.map(function(elem){console.log(elem*2)}) //what is the difference between using map and foreach                                     //does forEach return a new array?
// }                                               //forEach does not return anything, so can create an array and the values into it
// console.log(doubleTrouble([1, 2, 3]))            //just use map
// // doubleTrouble([1, 2, 3])
// console.log(doubleTrouble([10, 8, 5]))
// doubleTrouble([1, 2, 3])

//Question 45
//  function lastToFirst(arr){
// //     arr.reverse().push(arr[0])
// //     arr.reverse().pop()
// //     return arr
// arr.pop()
// arr.unshift(arr.pop())
// return arr
// }
//   console.log(lastToFirst([1, 2, 3, 4]))

// var arr = ['giraffe', 'hippopotamus', 'cat']
// arr[0]= "zebra"
// console.log(arr)

//Question 54
// var recipe = {
//     name: 'Mole',
//     servingSize: 2,
//     ingredients: ['cinnamon','cumin', 'cocoa']
//     }
// function getProp(obj){
//     var arr = [];
//     for(var item in obj){
//         arr.push(item)
//     }
//     return arr
// }
// console.log(getProp(recipe))
// function prettyLog(recipe){ 
//     for(var item in recipe){
//         if(item === 'ingredients'){
//             console.log('ingredients: ' + recipe[item].join(' > '))
//         }
//     else{console.log(recipe[item] + '\n')}
//     }
// }
  
// function prettyLog(recipe){
//     for (var item in recipe) { 
//       if (item === 'ingredients') {
//         console.log('ingredients:' + recipe['ingredients'].join(' > '))
//       } else {
//         console.log(item + ': '+ recipe[item])
//       }
//     }
//   }
// prettyLog(recipe)


//Question 56
// function double(num){
//     return num+num
// }

// function square(num){
//     return num*num
// }
    
// function doubleSquare(num){
//     return square(double(num))
// }
    
// console.log(doubleSquare(5))   



// var person = {
//     firstName: 'Erika',
//     lastName: 'Kim',
//     age: 25
//   }

//   person[gender] = 'female'
//   console.log(person)
// console.log(person.firstName)
// console.log(person['firstName']) //need the quotation

// var someVariable = 'firstName'
// console.log(person[someVariable])


// var num = 'age'
// console.log(person['age'])
// console.log(person[num])


// function logCallBack(callback, arg1, arg2){
//     console.log(callback(arg1))
//  }
 
//  function joinArr(arr){
//   return arr.join('')
//  }
 
//  logCallBack(joinArr, ['d', 'o', 'g'])

//Question 60
// function logArrTypes(arr){
//     arr.forEach(function(elem){
//     console.log(elem + ' is a ' + typeof(elem))
//     })
// }
// var mixedArr = [1, 'cat', true]
// logArrTypes(mixedArr) 

//Question 61
// function replaceWithDog(str){
//     var newStr = str.replace(/animals/i, 'dogs')
//     return newStr
//     }
    
// function replaceWithCat(str){    //Replace does not change the original string
//     var newStr = str.replace(/animals/i, 'cats') //have to reassign it to a new variable
//     return newStr
//     }

// function favoriteAnimal(str, callback) {
//     return callback(str);
//     }
      
// console.log(favoriteAnimal('animals are the best', replaceWithDog))
// console.log(favoriteAnimal('animals are the best', replaceWithCat))

//Question 62

// function conservativeSpender(balance)  {
//     return balance > 100
//   }
  
//   function liberalSpender(balance) {
//     return balance > 10
//   }
  
//   function horribleSaver (balance) {
//     return balance > 0
//   }
   
// function shouldIBuyThis(balance, callback){
//     if (callback(balance)){
//     return 'Sure! I\'ve got the moeny!'
//     }
//     return 'Nope! Gotta keep my savings up!'
// }
    
// function smarterShouldIButThis(balance, price, callback){
//     if(callback(balance - price)){
//     return 'Sure! I\'ve got the moeny!'
//     }
// return 'Nope! Gotta keep my savings up!'
// }
// console.log(smarterShouldIButThis(100, 20,  horribleSaver))
// console.log(smarterShouldIButThis(20, 5, liberalSpender))
// console.log(smarterShouldIButThis(100, 20, conservativeSpender))
// console.log(smarterShouldIButThis(220,101 , conservativeSpender))

//Question 64
// function map(arr, func){
//     newArray = []
//     for(var i = 0; i<arr.length; i++){
//         newArray.push(func(arr[i]))
//     }
//     return newArray
// }
// var arr = [1, 2, 3]
// var addArr = map(arr, function(num) { return num + 1 })
// console.log(addArr)


//Question 71
// var num = 1
// while(num<20){
// if(num%4 ===0){
// console.log('fools')
// }
// else if(num%2 === 0){
// console.log('charlatans')
// }
// else{console.log(num)}
// num++
// }

//Question 73
// function oddCaps(str){
//     var newStr = ''
//        if(typeof(str) !== 'string'){
//          return undefined
//        }
//     for(var i = 0; i<str.length; i++){
//     if(i%2){
//     newStr+=str[i].toUpperCase()
//     }
//     else{
//     newStr +=str[i]
//     }
//     }
//     return newStr
// }
// console.log(oddCaps('giraffe'))
// console.log(oddCaps(2))
//Question 76
// function fizzAndBuzz(){
//     var num = 0
//     while(num <100){
//     if(num%5 === 0 && num%3 === 0){
//     console.log('FizzBuzz')
//     }
//     else if(num%5 === 0){
//     console.log('Buzz')
//     }
//     else if(num%3 === 0){
//     console.log('Fizz')
//     }
//     else {console.log(num)}
//     num++
//     }
// }
// fizzAndBuzz()

//--------------------------------------
//Second Set
//Question 1
// var arr = [ [1, 2, 3], [4, 5], [6] ]
// var arrayOfArrays = arr.reduce(function(accu,curr){
//     return accu.concat(curr)
// })

// console.log(arrayOfArrays)

//Question 2
function isEven(num) {
    return num % 2 === 0
}

// function everyElem(arr,callback)
// {
//   var ans = arr.filter(function(num){
//     return callback(num)
//    });

//   if(ans.length === arr.length){
//     return true
//   }
//   return false
// };
// console.log(everyElem([2, 4, 6], isEven));
// console.log(everyElem([2, 3, 4, 6], isEven));

// function everyElem(arr, testFn){  
//    var ans =  arr.filter(testFn)
//     return arr.length === ans.length
// }

// console.log(everyElem([2, 4, 6], isEven));
// console.log(everyElem([2, 3, 4, 6], isEven));

//Question 3
// function isEven(num) {
//     return num % 2 === 0
// }

// function someElem(arr,callback){
//     var ans = arr.filter(function(num){
//         return callback(num)
//        })
//       // console.log(ans)
//     if(ans.length > 0)
//     {
//         return true
//     }
//     return false
// }

// function someElem(arr,testFn){
//     var ans = arr.filter(testFn)
//     return ans.length > 0
// }

// console.log(someElem([2, 4, 6], isEven));
// console.log(someElem([3, 5, 6], isEven)); 
// console.log(someElem([3, 5, 7], isEven)); 
//Question 4
// function onlyOnce(arr){
//     var newArr = []
//     arr.forEach(function(val){
//       if(!newArr.includes(val)){
//           newArr.push(val)
//         }
//     })
//     return newArr
// }


// function onlyOnce(arr){
//     var ans = arr.filter(function(num){ fix this
//         return arr.indexOf[num] === num
//         })
//         return ans 
//     }
// console.log(onlyOnce([1, 2, 3, 1, 4, 3]))

//Question 5
// var list1 = [
//     { firstName: 'Maria', lastName: 'Y.',  age: 30, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.',  age: 35, language: 'Python' },
//   ];
//getAverageAge(list1)
//console.log(list1[1].age)

// function getAverageAge(obj){
//     var ans = []
//     for(var item in obj){
//         ans.push(obj[item].age)
//     }
//     return ans.reduce(function(a,b){return Math.round((a+b)/2)})

// }

// console.log(getAverageAge(list1))

// function firstString(arr){
//     return arr.match(/['w', ]+,/)
// }

// console.log(firstString([3, 7, 'banana', 'kierkegaard']))

function getAverageAge(i){
    return i.reduce(function(totalAgeSoFar, developer){
    return totalAgeSoFar+developer.age;
},0)/l.length
}