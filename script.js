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
    if(op === '÷') {
        return divide(a,b);
    };
}

// All the numbers and operators go in the array
let array = [];
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
    display();
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
    array.push(2);
    display();
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
    array.push(3);
    display();
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
    array.push(4);
    display();
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
    array.push(5);
    display();
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
    array.push(6);
    display();
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
    array.push(7);
    display();
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
    array.push(8);    
    display();
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
    array.push(9);
    display();
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
    array.push(0);
    display();
});

// Operator buttons
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    array.push('+');
    display();
});

const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    array.push('-');
    display();
});

const division = document.getElementById('division');
division.addEventListener('click', () => {
    array.push('÷');
    display();
});

const multiplication = document.getElementById('multiplication');
multiplication.addEventListener('click', () => {
    array.push('x');
    display();
});

//Other buttons
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    array = [];
    display();
});

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    array.splice(array.length-1,1);
    display();
});

const dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    array.push('.');
    display();
})

function findOperators () {
    return array.findIndex(index => index === '+' || index === '-' || index === 'x' || index === '÷');
}

const equals = document.getElementById('equals');
const audio = new Audio('Cowabunga.mp3');
equals.addEventListener('click', () => {
    audio.play();
    let operatorCount = 0; 

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '+' || array[i] === '-' || array[i] === 'x' || array[i] === '÷') {
            operatorCount++;
        }
    }
    for (let i=0; i < operatorCount; i++) {
        let ops = array.find(thing => thing === '+' || thing === '-' || thing === 'x' || thing === '÷');
        let numFinder = findOperators();
        let numA = parseFloat(array.slice(0,numFinder).join(''));
        console.log(array);
        array.splice(0,numFinder+1);
        console.log(array);
        let numFinder2 = findOperators();
        console.log('numfinder2: ' +numFinder2);
        let numB = 0;
        if (numFinder2 === -1) {
            numB = parseFloat(array.join(''));
        }
        else {
            numB = parseFloat(array.slice(0,numFinder2).join(''));
        }
        console.log('numA: ' + numA);
        console.log('numB: ' + numB);
        array.splice(0,numFinder2);
        console.log(array);
        let result = operate(numA, numB, ops);
        array.unshift(result);
        console.log(array);
        screen.textContent = Math.round((result + Number.EPSILON) * 100000) / 100000;
    }
});

    // const secondNum = array.findLastIndex(index => index === '+' || index === '-' || index === 'x' || index === '÷');
        // numB = parseFloat(array.slice(numFinder+1, secondNum).join(''));

    // numB = parseFloat(array.slice(numFinder+1, secondNum+1).join(''));
// in case you need to come back to this. 
// function add (arr) {
//     const sum = arr.reduce((total, num) => {
//         return total + num;
//     });
//     return sum;
// };
