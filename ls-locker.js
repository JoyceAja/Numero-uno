var textBox = document.querySelector("text-input")
textBox.addEventListener("input", function(event) {
    window.localStorage.setItem("text", textBox.value)
})
textBox.value = window.localStorage.getItem("text");