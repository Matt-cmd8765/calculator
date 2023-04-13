// Basic operations
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate (a,b,op) {
    if (op === '+') {
       return add(a,b);
    };
    if (op === '-') {
       return subtract(a,b);
    };
    if (op === '*') {
        return multiply(a,b);
    };
    if(op === '/') {
        return divide(a,b);
    };
}

// Test of operations
let num1 = 12
let num2 = 6
let sign = '/';


let result = operate(num1, num2, sign);
console.log(result);

const screen = document.getElementById('screen');
screen.textContent = '899';








// in case you need to come back to this. 
// function add (arr) {
//     const sum = arr.reduce((total, num) => {
//         return total + num;
//     });
//     return sum;
// };
