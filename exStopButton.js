var doc = document.querySelector('#print')
var button = document.querySelector('#button')
var start = document.querySelector('#start')
doc.innerText = 0
var locked = false;

function printInk(){
    doc.innerText = Number(doc.innerText) + 1
}
var timer = setInterval(printInk, 250)

button.addEventListener('click',function(event){
    clearInterval(timer)
    if(!isNaN(Number(doc.innerText))){
    var time = doc.innerText
    doc.innerText = 'Fuck you pressed me'
    var timeStop = window.localStorage.setItem('time', time)
    } 
})

start.addEventListener('click', function(event){
    //a way to retrive the previous data
   if(!locked){
    locked = true
    doc.innerText = window.localStorage.getItem('time')
    timer = setInterval(printInk,250)
   } else{
       console.log('locked')
   }
})
window.localStorage.clear()