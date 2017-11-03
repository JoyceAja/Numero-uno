var text = document.querySelector("textarea")
text.addEventListener("input",function(event){
    window.localStorage.setItem("text", event.target.value)
})

text.value = window.localStorage.getItem("text")