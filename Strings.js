// var firstName ="Joyce"
// var lastName = "Ajagbe"

// // function fullName(firstName,lastName){
// //     return firstName.concat(" ", lastName)
// // }


// console.log(fullName(firstName,lastName))

var str = ''
var num = 10
// for (var i = 1; i <= num; i++) {
//   str += i + ', '
//   console.log(str)
// }


// for(var i=1; i<= num; i++){
//     if(i === num){
//         str += i
//     } else{
//         str += i + ', '
//     }
//     console.log(i + ' ' + str)
// }


// for(var i=1; i<=num; i++){
//    for(var j=1; j<=i; j++){
//        if (j>1){
//            str += ', '
//        }
//        str +=j
//    }
//     }


// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = n; j > 0; j--) {
//         str += j + ', ';
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list + 'BLAST OFF');
// }

// var name = "Andre"
// console.log(name[Math.floor(name.length/2)])


// var name = 'PeTEr'
// var name_temp = ''
// for(var i = 0; i<name.length; i++){
//     if(i===0){
//          name_temp += name[i].toUpperCase()
//     } else {
//         name_temp += name[i]
//     }
// }

// name_temp = name[0].toUpperCase() + name.substring(1)
// console.log(name_temp)

// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = 1; j <= n; j++) {
//         if (j > 1) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list);
// }

// var str = 'My favorite number is: '
// var num = 42
// var sentence = str.concat(42)
// console.log(sentence)

// Question 1
// Create a function called DrEvil. 
//It should take a single argument, an amount, and return ' dollars', 
// except it will add '(pinky)' at the end if the amount is 1 million. 

// function DrEvil(money){
//     if(money === 1000000){
//         return money += ' dollars (pinky)'
//     }
//     else{
//         return money += ' dollars'
//     }
// }
// console.log(DrEvil(1000))
// console.log(DrEvil(1000000))

// Question 2
// Create a function called verbing. It should take a single argument, a string. 
// If its length is at least 3, it should add 'ing' to its end,
// unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. 

// function verbing(verb){
// if(verb.length >= 3 && verb.search("ing")>0){
//     return verb += 'ly'
// }else if(verb.length >= 3){
//     return verb += 'ing'
// }
// else{return verb}
// }

// console.log(verbing('do'))

// Question 3
// Create a function getInitString 
// that takes a string as input and 
// return a copy of the string without the last letter.


// function getInitString(input){
//     return input.substring(0,input.length - 1)
// }
// console.log(getInitString('apple'))

// Question 4
// Create a function getLast that takes a string as input, 
// and returns the last letter of that string.

// function getLast(input){
//     return input.substring(input.length -1)
// }
// console.log(getLast('water'))

// Question 5

// Create a function capitalLast that takes a string as input, 
// and returns a copy of the string with the last letter capitalized.

// function capitalLast(input){
//     return input.substring(0,input.length -1) + 
//     input[input.length -1].toUpperCase()
// }
// console.log(capitalLast('joyce'))

// Question 6
// concatenation of the two strings (separated by a space), 
// swapping the first 2 characters of each. 
// You can assume that the strings are at least 2 characters long.

// function concatString(word1, word2){
//     var new_word = word2.substring(0,2)+word1.substring(2)
//     var new_word2 = word1.substring(0,2)+word2.substring(2)
//     return (console.log(new_word,new_word2))
// }

// concatString('happy', 'boy')

//  var word = 'properties'

// console.log(word.substring(-7,-3))
// console.log(word.substring(3,7))

// console.log(word.slice(-3))

// function nameCase(fullname){
// var n = fullname.toLowerCase()
// var full = n.split(' ')
// var firstName = full [0]
// firstName = firstName[0].toUpperCase()+firstName.slice(1)
// var lastName = full[1]
// lastName = lastName[0].toUpperCase()+lastName.slice(1)
// return console.log(firstName, lastName)
// }
// nameCase('BARack hussein ObamA')
// nameCase("Dre")
// nameCase('dr. Dre')


// function nameCase(name){
//     var theRest = name.toLowerCase().trim()
//     var space = theRest.indexOf(' ')
//     var result = ''
//     while(space !== -1){
//         var part1 = theRest.slice(0,space + 1)
//         theRest = theRest.slice(space+1)
//         result += part1[0].toUpperCase()+part1.slice(1)
//         space = theRest.indexOf(' ')
//     }
//     //if(theRest){
//     result +=theRest[0].toUpperCase()+theRest.slice(1)
//     //}
//     return result
// }
// console.log(nameCase('BARack hussein ObamA'))
// console.log(nameCase("Dre"))
// console.log(nameCase('dr. Dre'))

//Question 
function nameCase(name){
    //var n=name.toLowerCase()
    var result = name[0].toUpperCase()
    for(var i =1; i<name.length; i++){
        if(name[i - 1] === " "){
            result += name[i].toUpperCase()
        }else{
            result += name[i].toLowerCase()
        }
    }
    return result
}

console.log(nameCase('happy hAPPy hIppOs'))















































































