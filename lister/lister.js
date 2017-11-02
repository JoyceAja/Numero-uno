//Part 1
var form = document.querySelector('form')
var input = document.querySelector('#userInput')
var unlist = document.querySelector('ul')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    var list = document.createElement('li')
    unlist.appendChild(list)
    list.innerText = input.value

    //Part 2
    var line = list.style
    line.textDecoration = 'none'
    list.addEventListener('click', function (event) {
       line.textDecoration === 'none'? line.textDecoration = 'line-through' : line.textDecoration = 'none'
        
    })
    //Part 3
    var button = document.querySelector('button')
    button.addEventListener('click', function (event) {
        line.textDecoration = 'none'
    })
})




