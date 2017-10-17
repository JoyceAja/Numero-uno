//Question 1
var original = [1, 2, 3];

 var nextArr = original.map(function(elem){
    var newArr = []
    for(var i=0; i <100; i+=10){
        newArr.push(elem+i)
    }
    return newArr
})

console.log(nextArr)

//Question 2
// var original = [1, 2, 'buckle', 'my', 'shoe'];
// var newArr = original.map(function(elem){
//     if(typeof(elem) !== 'string'){
//         elem = ''
//         return elem
//     }
//     return elem
// })
// console.log(newArr)
//console.log(newArr)

//Question 3
// var original = [1, 2, 3, 4, 5, 6];
// var newArr = []
// original.filter(function(elem){
//     if(elem%2 === 0){
//         newArr.push(elem)
//     }
//     return newArr
// })

// console.log(newArr)

//Question 4
// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// var newArr = original.filter(function(elem){
//     if(elem){
//         return elem
//     }
// })

// console.log(newArr)

//Question 5
// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr.reduce(function(accum, curr){
//     return accum + curr
// })

// console.log(sumOfArr)

//Question 6
// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// var numArr = arr.filter(function(elem){
//     return typeof(elem) === 'number'
//     }
// )
// var sumOfArr = numArr.reduce(function(accum, curr){
//     return accum+curr
// })
// console.log(sumOfArr)

//Question 7
// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr.map(function(elem){
//     return elem * 2
// }).reduce(function(accum, elem){
//     return accum + elem
// });
// console.log(sumOfArr);

//Question 8
// var arr = [1, 2, 500, 6, 3, 26];
// var largestNum = arr.reduce(function(accum, curr){
//     if(curr > accum){
//         accum = curr
//     }
//     return accum
// })
// console.log(largestNum)

//Question 9
// function elementDivisibleBy(divisor, arr){
//     var newArr = arr.filter(function(elem){
//         return elem % divisor === 0
    
// })
// return newArr
// }
// console.log(elementDivisibleBy(2, [1, 2, 3, 4]));
// // [2, 4]
// console.log(elementDivisibleBy(5, [5, 25, 4, 8, 100]));
// // [5, 25, 100]

//Question 10
// function joinByReduce(str,arr){
//     var tot = arr.reduce(function(accum,curr){
//         return accum+=str+curr
//     })
//     return tot+str
// }
// console.log( joinByReduce( '-', [2, 4, 'sportsball', 'sewing machine'] ));
// // "2-4-sportsball-sewing machine-"
// console.log( joinByReduce( '+', [1, 2, 3] ));
// // "1+2+3+"

// Question 11
function countZeroes(arr){
    var count = 0
    arr.forEach(function(elem) {
        if(elem === 0){
            count ++
        }
    });
    return count
}
console.log(countZeroes([1, 2, 0, 12, 0, 3, 0, 0]))