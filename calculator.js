let prevNumText = '';
let currNumText = '';
let operation = '';


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
                currNumText = currNumText + event.target.textContent;
                display.textContent = currNumText;
                break;
            
            case 'clear':
                prevNumText = '';                   // clear number variable
                currNumText = '';                   // clear number variable
                display.textContent = '0';          // reinitialized display to zero

                // clear operator button styling
                if (operation != ''){
                    removeOperatorStyle();

                    operation   = '';             // clear operator variable
                };
                   
                break;
            
            case 'operator':

                // remove styling from previously selected operator before replace.
                removeOperatorStyle();

                // replace variable with new selected value
                operation = event.target.id;

                // once operator button is selected, save existing num as prevNum variable
                // and then reinitialized the currNum.
                if (currNumText != '') {
                    prevNumText = currNumText;
                    currNumText = '';
                };

                break;

            case 'equate':
                let checkVar = prevNumText != ''
                                && currNumText != ''
                                && operation != '';
                
                if (checkVar) {
                    let result = operator(prevNumText, currNumText, operation);
                    display.textContent = result;
                    removeOperatorStyle();

                    // save result as prevNum for later use & clear  currNum
                    prevNumText = result;
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

removeOperatorStyle = () => {
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
