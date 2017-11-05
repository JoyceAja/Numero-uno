var input = document.querySelector('#input')
var text = document.querySelector('#text')
var submit = document.querySelector('#submit')

function prankBaby(){
    text.innerText = 'JK, you typed: ' + input.value
    input.value = ''
}

submit.addEventListener('click', function(event){
    event.preventDefault()
    text.innerText = 'You typed: I hate marshmallows'
    setTimeout(prankBaby,1000)
})

