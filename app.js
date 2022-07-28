// Some global values
let numberOne
let numberTwo
let mathmaticalOperator


// Add function
let add = function(num1, num2) {
    return parseInt(num1) + parseInt(num2)
}


// Subtract function
let substract = function (num1, num2) {
    return parseInt(num1) - parseInt(num2)
}


// Multiply function
let multiply = function(num1, num2) {
    return parseInt(num1) * parseInt(num2)
}


// Divide function
let divide = function(num1, num2) {
    return parseInt(num1) / parseInt(num2)
}


// Function will be called when '=' is called
let operate = function(num1, num2, callback) {
    return `${callback(num1, num2)}`
}



// main display in screen
let displayValue = document.getElementById('display-value')


// get mini-display text
let miniDisplay = document.getElementById('mini-display')


// get '=' button
let equalButton = document.getElementById('operate-button')


// get all operation-button as a node-list
let operationButtons = document.querySelectorAll('#operation-button')



/** 
 * Will set mini-display to display-value's value...
 * with whatever operation button that has been clicked
 */
operationButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        mathmaticalOperator = opButton.innerText
        numberOne = displayValue.innerText
        miniDisplay.innerText = `${displayValue.innerText}${opButton.innerText}`
        displayValue.innerText = ''
        
    })
})





/**
 * will clear the display on click
 *  */ 
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    displayValue.innerText = ''
    miniDisplay.innerText = ''
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




/**
 * Eventlistener for '=' button, It'll set 'numberTwo'...
 * to 'displayValue's ' value and will call
 */
equalButton.addEventListener('click', () => {

    numberTwo = displayValue.innerText
    miniDisplay.innerText = ''
    console.log(numberOne);
    
    switch (mathmaticalOperator) {
        case '+':
            displayValue.innerText = ''
            displayValue.innerText = operate(numberOne, numberTwo, add)
            break;
    

        case '-':
            displayValue.innerText = operate(numberOne, numberTwo, substract)
            break;


        case '*':
            displayValue.innerText = operate(numberOne, numberTwo, multiply)
            break;


        case '/':
            displayValue.innerText = operate(numberOne, numberTwo, divide)
            break;
        
    }





})


