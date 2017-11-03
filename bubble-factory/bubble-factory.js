
var button = document.querySelector('button')
button.addEventListener('click', function (event) {
    // event.preventDefault()
    let image = document.createElement('img')
    image.src = 'bubble.jpg';
    image.style.height = Math.round(Math.random() * 50 + 10).toString() + "px";
    // image.style.top = Math.round(Math.random() * 95).toString() + "%";
    // image.style.left = Math.round(Math.random() * 99).toString() + "%"
    image.style.postion = "fixed"
    document.body.appendChild(image)
})


