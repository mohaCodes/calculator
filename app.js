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

// main display in screen
let displayValue = document.getElementById('display-value')


/**
 * will clear the display on click
 *  */ 
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    displayValue.textContent = ''
    displayValue.classList.add('text-4xl')
})



/** 
 * getting numbers buttons as nodelists
 * every number will have the same eventlistener
 * get button's value and then update displayValue
*/
const numberButtons = document.querySelectorAll('#number-button')
numberButtons.forEach((numberButton) => {

    numberButton.addEventListener('click', () => {
        displayValue.textContent += numberButton.textContent

        if(displayValue.innerText.length == 15) {
            displayValue.classList.add('text-sm')
            displayValue.classList.remove('text-4xl')
        }

    })
    
    
})


console.log(operate(1, 2, add));