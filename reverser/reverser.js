let userInput = document.querySelector('#string');
let btn = document.querySelector('form');
btn.addEventListener('submit', function(event){
    event.preventDefault();
    var val = userInput.value
    document.querySelector('p').innerText = val.split('').reverse().join('')
})