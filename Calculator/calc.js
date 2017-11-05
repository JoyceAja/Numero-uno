var outputDiv;

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operators = ['+', '-', '*', '/'];
var operations = ['add', 'sub', 'mul', 'div']
var key = 'key'
var max = 15

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp) {
    try {
        return eval(mathExp)
    } catch (e) {
        return NaN
    }
}


function clearExp() {
    outputDiv.innerText = ''
    window.localStorage.clear()
}


document.addEventListener('DOMContentLoaded', function () {
    outputDiv = document.getElementById('output');
    var lastId;
    document.addEventListener('click', function (event) {
        var elementId = event.target.id;
        lastId = outputDiv.innerText[outputDiv.innerText.length - 1]
        if (numbers.includes(elementId) && outputDiv.innerText.length < max) {
            outputDiv.innerText += document.getElementById(elementId).innerText;
            // logging the element id for debug purposes
            console.log(elementId)
        } else if (elementId === 'clr') {
            clearExp()
        } else if (operations.includes(elementId) && outputDiv.innerText.length < max) {
            if (lastId > 0 && lastId !== elementId) {
                outputDiv.innerText += document.getElementById(elementId).innerText;
            }
        }
        else {
            outputDiv.innerText = calculate(outputDiv.innerText)

        }
    })
})
