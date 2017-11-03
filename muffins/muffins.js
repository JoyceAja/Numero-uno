
var count = document.querySelector('#count')
var eat = document.querySelector('#eat')

eat.addEventListener('click', function (event) {
    if (Number(count.innerText) > 0) {
        count.innerText = (Number(count.innerText) - 1)
        window.localStorage.setItem('value', count.innerText)
    }
})

var bake = document.querySelector('#bake')
bake.addEventListener('click', function (event) {
    count.innerText = (Number(count.innerText) + 5)
    window.localStorage.setItem('value', count.innerText)
})

count.innerText = window.localStorage.getItem('value')
