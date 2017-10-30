let input = window.prompt("choose an id from one-four")
let nextInput = window.prompt("please input a text")
if((/[one, two ,three, four]/).test(input)){
    document.getElementById(input).innerText = nextInput
}else{
    document.getElementById("one").innerText = nextInput
}