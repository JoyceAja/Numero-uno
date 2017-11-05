var Key = 'text'
var submit = document.querySelector('#submit')
submit.addEventListener('click', function(event){
    var input = document.querySelector('#input')
    var p = document.querySelector('#text')
    p.innerText +=  ' ' + input.value
    window.localStorage.setItem(Key,p.innerText)
    input.value = ''; //makes the input value empty again, so you are able to type in the nect value
    // alert('This is what I put in ' + p)
})

var p = document.querySelector('#text')
window.localStorage.getItem(Key)

var clear = document.querySelector('#clear')
clear.addEventListener('click', function(event){
    var input = document.querySelector('#input')
    var p = document.querySelector('#text')
    input.value = ''; //clears the value in the textbox
    // window.localStorage.setItem(clear,'')
    window.localStorage.clear() //Clears it from the storage
    p.innerText = ''; //clears the value in the paragraph or just clears the inner text
    
})
