document.addEventListener('click', function(event){
    var back = document.querySelector('body')
    if(event.clientX > window.innerWidth/2){
        back.style.backgroundColor = "peachpuff"
    }
    else{
        back.style.backgroundColor = 'mediumaquamarine'
    }
})

//better & shorter approach
// var isLeftSide = event.clientX > window.innerWidth/2 
// back.style.backgroundColor =  isLeftSide ? "peachpuff" : 'mediumaquamarine';