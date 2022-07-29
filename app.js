// Some global values
let numberOne
let numberTwo
let mathmaticalOperator
let displayText


// Add function
let add = function(num1, num2) {
    return num1 + num2
}


// Subtract function
let substract = function (num1, num2) {
    return num1 - num2
}


// Multiply function
let multiply = function(num1, num2) {
    return num1 * num2
}


// Divide function
let divide = function(num1, num2) {
    return num1 / num2
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


// 'delete' button
let deleteButton = document.querySelector('#delete-button')



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
            displayValue.innerText = operate(Number(numberOne), Number(numberTwo), add)
            numberOne = ''
            numberTwo = ''
            mathmaticalOperator = ''
            break;
    

        case '-':
            displayValue.innerText = ''
            displayValue.innerText = operate(Number(numberOne), Number(numberTwo), substract)
            numberOne = ''
            numberTwo = ''
            mathmaticalOperator = ''
            break;


        case '*':
            displayValue.innerText = ''
            displayValue.innerText = operate(Number(numberOne), Number(numberTwo), multiply)
            numberOne = ''
            numberTwo = ''
            mathmaticalOperator = ''
            break;


        case '/':
            if (numberOne == 0 || numberTwo == 0) {
                alert('Invalid operation')
            } else {
                displayValue.innerText = ''
                displayValue.innerText = operate(Number(numberOne), Number(numberTwo), divide)
                numberOne = ''
                numberTwo = ''
                mathmaticalOperator = ''

            }
            break;
        
    }

})



/** 
 * attaching an eventlistener to 'delete' button.
 * It'll get the displayValue and then split it, delete last element...
 * and then rejoin them.
 */
deleteButton.addEventListener('click', () => {

    displayText = displayValue.innerText
    displayText = displayText.split('')
    displayText.pop()
    displayText = displayText.join('')
    displayValue.innerText = displayText
    console.log(displayValue.innerText);


})
