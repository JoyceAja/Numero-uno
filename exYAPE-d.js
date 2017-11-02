document.addEventListener('click',function(event){
    if(event.target.nodeName === 'LI'){
        var add = document.createElement('li')
        // add.innerHTML = event.target
        add.innerHTML = event.target.innerHTML
        var ul = document.querySelector('ul')
        ul.appendChild(add)
    }
})