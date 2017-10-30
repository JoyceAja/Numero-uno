let input = window.prompt("Input a number")
var num = parseInt(input)
if(isNaN(num)){
    window.alert("That is not a number")
}else if(num%2){
    window.alert("That number is odd")
}
else{
    window.alert("That number is even")
}
