//var form = document.querySelector('form')
document.addEventListener('submit', function(event){
    event.preventDefault()
    var image = document.createElement('img')
    image.src= 'bubble.jpg';
    image.width='100'
    document.body.appendChild(image)
})