document.addEventListener('keypress', function(event){
    var sel = document.querySelector('h1')
    sel.innerText = sel.innerText + event.key;
    
    if(event.key === event.key.toUpperCase() && event.key !== ' '){
        sel.classList.add('cap')
    } 
    if(event.key === '.'|| event.key === '?'|| event.key === '!'){
        sel.classList.remove('cap')
    }
})
// document.addEventListener('keypress', function(event){

// }