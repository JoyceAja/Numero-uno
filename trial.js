var submit = document.querySelector('#submit')
var input = document.querySelector('#userInput')
var ul = document.querySelector('ul')
var key = 'outPut'
submit.addEventListener('click', function(event){
    //creating a new list
    //adding the input to the list
    var list = document.createElement('li')
    ul.appendChild(list)
    list.innerText = input.value
    input.value = ''
    //saving the files
    localStorage.setItem(key,JSON.stringify(list.innerText))
})
var retrive = localStorage.getItem(key)
var finalAns = JSON.parse(retrive)
// console.log()
