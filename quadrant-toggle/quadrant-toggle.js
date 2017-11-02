document.addEventListener('click', function(event){
    var name = event.target //saving the user's click
    if(name.nodeName === 'DIV'){
        if(name.style.backgroundColor === 'white'){
            name.style.backgroundColor = 'black'
        }else{
            name.style.backgroundColor = 'white'
        }
   }
})

//Fix css