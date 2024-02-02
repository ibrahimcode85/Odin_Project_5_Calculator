let prevNumText = '';
let currNumText = '';
let operation = '';


// declare functions for basic computation
function add(num1, num2){
    return num1 + num2;
};

function subtract(num1, num2){
    return num1 - num2;
};

function multiply(num1, num2){
    return num1 * num2;
};

function divide(num1, num2){
    return num1 / num2;
}

// function to perform operations
function operator(num1, num2, operation){

    switch(operation){
        case 'add':
            return add(num1, num2);
            break;

        case 'subtract':jh
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

// get info (number/operator/clear) on button click
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
                currNumText = '';                   // clear number variable
                display.textContent = '0';          // reinitialized display to zero

                // clear operator button styling
                if (operation != ''){
                    let buttonOperator = buttons.querySelector(`#${operation}`);
                    buttonOperator.style.opacity = '';
                };
                   
                break;
            
            case 'operator':
                operation = event.target.id;
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


// add event handlers
const buttons = document.querySelector('.container_buttons');

buttons.addEventListener('mousedown', addButtonStyle    );
buttons.addEventListener('mouseup'  , removeButtonStyle );
buttons.addEventListener('click', getData);
