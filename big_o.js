// function quadraticTime(characterNames) {
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//                 console.log("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j])
//         }
//     }
// }


// quadraticTime(["Agnes", "Bart", "Carl"])



// function logBoard(board){
//     for (var i = 0; i < board.length; i++){
//         for(var j = 0; j <board.length; j++){
//             console.log(board[i][j])
//         }
//     }
//   }
  
  
//   var board = [ ["X", "O", "O"], 
//                 ["O", "X", "O"], 
//                 ["X", "O", "X"]  ]
  
  
//   logBoard(board)
function secondSmallest(myArr) {
    var min = myArr[0];
    var minIndex = 0;

    myArr.forEach(function(num, index) {
        if (num < min) {
            min = num;
            minIndex = index;
        }
    })

    var min = { value: myArr[0], index: 0 }

    var secondMin = min === myArr[0] ? myArr[1] : myArr[0]
    //if(min === myArray[0]){
    //secondMin = myArray[1]}
    //else{
    //secondMin = myArray[0]}
    myArr.forEach(function(num, index) {
        if (num < secondMin && index !== minIndex) {
            secondMin = num;
        }
    })

    return secondMin
}

console.log(secondSmallest([2,3,4]))