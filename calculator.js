const num1 = 2;
const num2 = 3;
const operation = 'add';


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

console.log(operator(num1,num2,'add'     ));
console.log(operator(num1,num2,'subtract'));
console.log(operator(num1,num2,'multiply'));
console.log(operator(num1,num2,'divide'  ));