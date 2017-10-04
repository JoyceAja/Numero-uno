// function removeDupes(arr){
//     var newArray = []
//     for(var i=0; i<arr.length; i++){
//         for(var j = i; j<arr.length; j++){
//                 //console.log(i)
//                 if(arr[i] === arr[j]){
//                     return false
//                 }
//                // newArray.push(arr[i])
//             //console.log(arr[i])
//         }
//         return true
//     }
//     // return true
//     //return newArray
// }
// var arr = [1,2,3,4,5,6,7]
// console.log(removeDupes(arr))

//Removes Dupes
// function removeDupes(arr){
//     var newArray = []
//     for(var i=0; i<arr.length; i++){
//         //console.log(newArray.indexOf(arr[i]))
//         if(newArray.indexOf(arr[i]) === -1){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray
// }

// function concatAndRemoveDupes(arr1,arr2){
//     return removeDupes(arr1.concat(arr2))
// }
// var arr1 = [1,1,2,2,3,3,3,5,6,5,5,5,5]
// var arr2 = [2,2,3,4,4,5,5,6,6,7,7]
// console.log(concatAndRemoveDupes(arr1,arr2))


//Creating the map function
// function map(arr, callback){
//     var newArray = []
//     for(var i =0; i<arr.length; i++){
//         newArray.push(callback(arr[i]))
//     }
//     return newArray
// }

// function add4 (num){
//     return num + 4
// }

// console.log(map([5,6,10], add4))

function sort(arr){
    return arr.sort()
    }
    
    function middleElement(arr){
    newArray = []
    var middle = Math.floor((arr.length -1)/2)
    if(arr.length%2 === 0) {
    return (arr[middle]+ arr[middle+1])/2
    
    }else{
    return (arr[Math.floor(arr.length/2)])
    }
    }
    
    function median (arr){
    return middleElement(sort(arr))
    }

console.log(median([1,2,3,4,5,6,7,8,9,10]))


















