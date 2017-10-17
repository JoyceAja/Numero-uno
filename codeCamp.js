// function palindrome(str) {
//     // Good luck!
//     str = str.toLowerCase().replace(/[\W_]/g, '')
//     var newStr = str.split('').reverse().join('');
//     console.log(str)
//     console.log(newStr)
//     if(str === newStr){
//       return true;
//     }
//     return false
//   }
  
  
  
//   console.log(palindrome("e*y*e"));
//   console.log(palindrome("d*-og"));


// function titleCase(str) {
   // str = str
//     var newStr = str.split(' ');
//     var final = ''
//     newStr.map(function(elem){
//     var newString = ''
//       newString = elem[0].toUpperCase();
//       for(var i = 1; i<elem.length; i++){
//         newString+=elem[i].toLowerCase();;
//       }
//       final+= newString + ' '
//     });
//     console.log(final);
//   }
  
//  titleCase("I'm a little tea pot");
//  titleCase("sHoRt AnD sToUt")
//  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")


// function titleCase(str) {
//     // str = str
//      var newStr = str.toLowerCase().split(' ');
//      var final = newStr.map(function(elem){
//         return elem.replace(elem.charAt(0), elem.charAt(0).toUpperCase());
//        });
//     return final.join(' ');
//    }
   
//   console.log(titleCase("I'm a little tea pot"));

// function largestOfFour(arr) {
//     var newArr = [];
//     arr.map(function(elem){
//     var large = 0;
//       for(var i =0; i<elem.length; i++){
//         if(elem[i]>large){
//           large = elem[i];
//         }
//       }
//       newArr. push(large)
//     }); 
//     return newArr;
//   }
  
// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3]]));

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    if(str.length>1){str = str.split(' ');}
   var end = str.substr(str.length-1);
    if(end === target){
    return true;
  }
    return false;
  }
  confirmEnding("Bastian", "n");
  //confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")