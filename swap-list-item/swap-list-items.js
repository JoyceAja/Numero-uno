let input1 = window.prompt("please identify an id from one - four")
let input2 = window.prompt("please identify a second id, different from initial pick")
let newVal = document.getElementById(input1).innerText
// function swap(){
    document.getElementById(input1).innerText = document.getElementById(input2).innerText
    document.getElementById(input2).innerText = newVal
//}
// function secondSwap(){
//     document.getElementById(input2).innerText = document.getElementById(input1).innerText.slice(0)
// }

// swap()
// secondSwap()