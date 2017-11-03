var Key = 'text'
document.addEventListener('click', function(event){
    event.preventDefault()
    var input = document.querySelector('#input')
    var p = document.querySelector('#text')
    p.innerText +=  ' ' + input.value
    window.localStorage.setItem(Key,p.innerText)
    input.value = '';
    // alert('This is what I put in ' + p)
})

var p = document.querySelector('#text')
window.localStorage.getItem(Key)

var clear = document.querySelector('#clear')
clear.addEventListener('click', function(event){
    var input = document.querySelector('#input')
    var p = document.querySelector('#text')
    input.value = '';
    // window.localStorage.setItem(clear,'')
    window.localStorage.clear()
    p.innerText = '';
    
})
