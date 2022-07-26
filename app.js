// Add function
function add(num1, num2) {
    return num1 + num2
}


// Subtract function
function subtract(num1, num2) {
    return num1 - num2
}


// Multiply function
function multiply(num1, num2) {
    return num1 * num2
}


// Divide function
function divide(num1, num2) {
    return num1 / num2
}


// Function will be called when '=' is called
function operate(num1, num2, callback) {
    return `${callback(num1, num2)}`
}


// will clear the display on click
const clearButton = document.getElementById('clear-button')


// getting numbers buttons as nodelists, every button will have the same 


console.log(operate(1, 2, add));