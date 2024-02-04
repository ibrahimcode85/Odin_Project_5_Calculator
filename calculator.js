let prevNumText = '';
let currNumText = '';
let operation = '';
let arrayNum = [];
let arrayOperation = [];
let keyOperation = {'add': '+', 'subtract': '-', 'multiply': '&times;', 'divide': '&#247'};


// declare functions for basic computation
function add(num1, num2){
    let result = Number(num1) + Number(num2);
    return result.toString();
};

function subtract(num1, num2){
    let result = Number(num1) - Number(num2)
    return result.toString();
};

function multiply(num1, num2){
    let result = Number(num1) * Number(num2);
    return result.toString();
};

function divide(num1, num2){
    let result = Number(num1) / Number(num2);
    return result.toString();
}

// function to perform operations
function operator(num1, num2, operation){

    switch(operation){
        case 'add':
            return add(num1, num2);
            break;

        case 'subtract':
            return subtract(num1, num2);
            break;

        case 'multiply':
            return multiply(num1, num2);
            break;

        case 'divide':
            return divide(num1, num2);
            break;
    };
};

// get data (number/operator/clear) from button click
getData = (event) => {
    let display = document.querySelector('.display_text');
    let className = event.target.className;

    if (event.target.tagName == 'BUTTON') {
        
        switch(className) {
            case 'number':
                let checkDecimal = event.target.textContent == '.' &&  currNumText.includes('.');
                
                if (checkDecimal) break;

                currNumText = currNumText + event.target.textContent;
                display.textContent = currNumText;
                
                break;
            
            case 'clear':
                prevNumText = '';                   // clear number variable
                currNumText = '';                   // clear number variable
                display.textContent = '0';          // reinitialized display to zero

                // clear operator button styling
                if (operation != ''){
                    removeOperatorStyle(operation);

                    operation   = '';             // clear operator variable
                };
                   
                break;
            
            case 'operator':
                // capture operation before variable update
                let prevOperation = operation;
                
                // replace variable with current selected value
                operation = event.target.id;
                arrayOperation.push(operation);

                // clear the operator button styling if new operator is selected
                if (prevOperation != '' && prevOperation != operation) {
                    removeOperatorStyle(prevOperation);
                };

                // once operator button is selected, save existing num in the array
                // and then reinitialized the currNum.
                if (currNumText != '') {
                    arrayNum.push(currNumText);
                    currNumText = '';
                };

                break;

            case 'equate':
                // save the last number
                arrayNum.push(currNumText);

                // check if calculation can be performed
                let checkVar = arrayNum.length > 0 && arrayOperation.length > 0;
                
                // perform calculation
                if (checkVar) {
                    // loop and perform operation
                    let result = arrayNum[0];

                    for (let idx = 1 ; idx < arrayNum.length; idx++) {
                        result = operator(result, arrayNum[idx], arrayOperation[idx -1]); 
                    };

                    // let result = operator(prevNumText, currNumText, operation);
                    display.textContent = result;
                    removeOperatorStyle(operation);

                    // save result as prevNum for later use & reinitialized all variables
                    prevNumText = result;
                    arrayNum = [];
                    arrayOperation = [];
                    currNumText = '';
                };

                break;

        };
    };
    
};


// style change on button click 
addButtonStyle = (event) => {
    
    if (event.target.tagName == 'BUTTON'){
       event.target.style.opacity = '50%';
    };
    
};

removeButtonStyle = (event) => {

    if (event.target.tagName == 'BUTTON' 
        && event.target.className != 'operator'){
            event.target.style.opacity = '';
    };
    
};

removeOperatorStyle = (operation) => {
    if (operation != '') {
        let buttonOperator = buttons.querySelector(`#${operation}`);
        buttonOperator.style.opacity = '';
    };
};


// add event handlers
const buttons = document.querySelector('.container_buttons');

buttons.addEventListener('mousedown', addButtonStyle    );
buttons.addEventListener('mouseup'  , removeButtonStyle );
buttons.addEventListener('click', getData);
