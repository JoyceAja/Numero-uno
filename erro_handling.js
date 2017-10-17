// "use strict";
// var assert = require('assert'); //must call this before using assert

// function test1() {
//   var p1 = new Vector(1, 2);

//   assert.strictEqual(p1.x, 1, "p1.x should be 1");
//   assert.strictEqual(p1.y, 2, "p1.y should be 2");
// }

// function test2() {
//     var p1 = new Vector(1, 2);
//     var p2 = new Vector(2, 4);
//     var p3 = p1.plus(p2);

//     assert.strictEqual(typeof p3, "object", "p3 should be an object")
//     assert.strictEqual(p3.x, 3, 'p3.x');
//     assert.strictEqual(p3.y, 6, 'p3.y');
//   }

//   //The problem with this method is that when the first test fails it doesnt run the remaining tests
// try {
//     test1();
// } catch (error){
//     consoe.log(error)  //just because the error is a lot sometimes "got an error"
// }                               //Kinda useless because you dont know te error 
//                                //log the error message directed error.message


// "use strict";
// var assert = require("assert");

// function runTests(tests) {
//     var passed = 0;
//     var failed = 0;

//     tests.forEach(function(test){
//         try {
//             console.log()
//             console.log(test)
//             test();

//             passed += 1;
//         } catch (error) {
  
//             console.log("--- Test Failed ---")
//             console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//             console.log(error.stack.split("\n")[1])

//             failed += 1;
//         }
//     })

//     console.log()
//     console.log("---Total---")
//     console.log(passed + " passed")
//     console.log(failed + " failed")
// }

// function Vector(x, y) {
//     this.x = x;
// }


// Vector.prototype.plus = function(other) {
//     return new Vector(this.x + other.x, this.y + other.y);
// };

// function test1(){
//     var p1 = new Vector(1, 2);

//     assert.strictEqual(p1.x, 1, "p1.x");
//     assert.strictEqual(p1.y, 2, "p1.y");
// }

// function test2() {
//   var p1 = new Vector(1, 2);
//   var p2 = new Vector(2, 4);
//   var p3 = p1.plus(p2);

//   assert.strictEqual(p3.x, 3, 'p3.x');
//   assert.strictEqual(p3.y, 6, 'p3.y');
// }

// var tests = [test1, test2];

// runTests(tests)



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

    myArr.forEach(function(num, index) {
        if (num < secondMin && index !== minIndex) {
            secondMin = num;
        }
    })

    return secondMin
}

