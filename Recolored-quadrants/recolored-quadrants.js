document.addEventListener("DOMContentLoaded", function(event){
var input = window.prompt("select an identifier (topLeft, topRight, bottomLeft, bottomRight)")
var color = window.prompt("what color do you want")
var ans = document.querySelector("#"+input)
ans.style.backgroundColor = color
})