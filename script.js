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
// let num1 = 12;
// let num2 = 6;
// let sign = '/';


// let result = operate(num1, num2, sign);
// console.log(result);

const array = [];

// one button
const one = document.getElementById('one');
one.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(1);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(2);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(3);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(4);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(5);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(6);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(7);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(8);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(9);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push(0);
    let display = array.join('');
    screen.textContent = display;
    return parseInt(display);
});

const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    array.push('+');
    let display = array.join('');
    screen.textContent = display;
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    const screen = document.getElementById('screen');
    const secondNum = array.findLastIndex((item) => typeof item === "number");
    const addFinder = array.findIndex(index => index === '+');
    let numA = parseInt(array.slice(0,addFinder).join(''));
    let numB = parseInt(array.slice(addFinder, secondNum+1).join(''));
    console.log(numA);
    console.log(numB);
    screen.textContent = add(numA, numB);
});































// in case you need to come back to this. 
// function add (arr) {
//     const sum = arr.reduce((total, num) => {
//         return total + num;
//     });
//     return sum;
// };
