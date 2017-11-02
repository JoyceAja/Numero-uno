document.addEventListener('click', function(event){
    if(event.target.nodeName === 'LI'){
        console.log(event.target)
    }
})

document.createElement(tag)