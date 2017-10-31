// document.addEventListener("DOMContentLoaded", function(event){
    var val = document.querySelectorAll('p');
    for(var i=0; i<val.length; i+=2){
        val[i].classList.add('bgGreen')
    }
    for(var i =1; i<val.length; i+=2){
        val[i].classList.add('bgYellow')
    }
// })
