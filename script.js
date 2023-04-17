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
    if (op === 'x') {
        return multiply(a,b);
    };
    if (op === '÷') {
        return divide(a,b);
    };
}

// array for the screen
let array = [];
// array that operate uses for its calculations
let mainArray = [];
// array that stores numbers until they are joined and pushed to the main array
let functionalArray = [];
// reference screen element
const screen = document.getElementById('screen');

//function to display the numbers on the screen
function display() {
    let display = array.join('');
    screen.textContent = display;
}

// number buttons
const one = document.getElementById('one');
one.addEventListener('click', () => {
    array.push(1);
    functionalArray.push(1);
    display();
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
    array.push(2);
    functionalArray.push(2);
    display();
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
    array.push(3);
    functionalArray.push(3);
    display();
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
    array.push(4);
    functionalArray.push(4);
    display();
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
    array.push(5);
    functionalArray.push(5);
    display();
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
    array.push(6);
    functionalArray.push(6);
    display();
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    array.push(7);
    functionalArray.push(7);
    display();
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    array.push(8);
    functionalArray.push(8);
    display();
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    array.push(9);
    functionalArray.push(9);
    display();
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    array.push(0);
    functionalArray.push(0);
    display();
});

// Operator buttons

const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    let r = functionalArray.join('')
    mainArray.push(r);
    array.push('+');
    mainArray.push('+');
    functionalArray = [];
    display();
});

const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    let r = functionalArray.join('')
    mainArray.push(r);
    array.push('-');
    mainArray.push('-');
    functionalArray = [];
    display();
});

const division = document.getElementById('division');
division.addEventListener('click', () => {
    let r = functionalArray.join('')
    mainArray.push(r);
    array.push('÷');
    mainArray.push('÷');
    functionalArray = [];
    display();
});

const multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', () => {
    let r = functionalArray.join('')
    mainArray.push(r);
    array.push('x');
    mainArray.push('x');
    functionalArray = [];
    display();
});

//Other buttons

//Clear button
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    array = [];
    functionalArray = [];
    mainArray = [];
    display();
});

// Backspace button
const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    array.splice(array.length-1,1);
    functionalArray.splice(functionalArray.length-1,1);
    if (functionalArray[0] === '') {
        array = [];
        functionalArray = [];
    }
    display();
});

//For decimal places
const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    array.push('.');
    functionalArray.push('.');
    display();
});

// Percent button
const percentage = document.getElementById('percent');
percentage.addEventListener('click', () => {
    let value = document.getElementById('screen').textContent;
    let result = value * 100;
    document.getElementById('screen').textContent = result + '%';
})

// equals function
const equals = document.getElementById('equals');

//audio file for Cowabunga
const audio = new Audio('Cowabunga.mp3');
equals.addEventListener('click', () => {
    audio.play();
    let r = functionalArray.join('');
    mainArray.push(r);

    // determine how many loops of calculations will be performed. 
    let operatorCount = 0; 
    for (let i = 0; i < mainArray.length; i++) {
        if (mainArray[i] === '+' || mainArray[i] === '-' || mainArray[i] === 'x' || mainArray[i] === '÷') {
            operatorCount++;
        }
    }
    
    for (let i=0; i < operatorCount; i++) {

        // Searches for either multiplication or division within main array. 
        let multDiv = mainArray.find(operator => operator === 'x' || operator === '÷');
        let addSub = mainArray.find(operator => operator === '+' || operator === '-');

        // Do multiplication or division first
        if (multDiv === 'x' || multDiv === '÷') {
            let numFinder = mainArray.findIndex(index => index === 'x' || index === '÷');
            let numA = parseFloat(mainArray.slice(numFinder-1));
            let numB = parseFloat(mainArray.slice(numFinder+1));
            if (numA === 0 || numB === 0) {
                screen.textContent = 'BOGUS!';
                return 1;
            }
            let result = operate(numA, numB, multDiv);
            mainArray.splice(numFinder-1, 3, result);
            
            // limit result to 5 decimal places
            screen.textContent = Math.round((result + Number.EPSILON) * 100000) / 100000;
        }
        // Do addition and subtraction second
        if (addSub === '+' || addSub === '-') {
            let numFinder = mainArray.findIndex(index => index === '+' || index === '-');
            let numA = parseFloat(mainArray.slice(numFinder-1));
            let numB = parseFloat(mainArray.slice(numFinder+1));
            let result = operate(numA, numB, addSub);
            mainArray.splice(numFinder-1, 3, result);
            
            // limit result to 5 decimal places
            screen.textContent = Math.round((result + Number.EPSILON) * 100000) / 100000;
        }
    }
});