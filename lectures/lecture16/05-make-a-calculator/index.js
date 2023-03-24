function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 + number2;
    document.querySelector('#answer').innerHTML = addresult;
    
}

function subtractNumbers() {
    // Same as above but subtract!
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 - number2;
    document.querySelector('#answer').innerHTML = addresult;
}

function multiplyNumbers() {
    // Same as above but multiply!
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 * number2;
    document.querySelector('#answer').innerHTML = addresult;
}

function divideNumbers() {
    // Same as above but divide!
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 / number2;
    document.querySelector('#answer').innerHTML = addresult;
}

function exponent() {
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 ** number2;
    document.querySelector('#answer').innerHTML = addresult;
}


function modulus() {
    let number1 = document.querySelector('#num1').value;
    let number2 = document.querySelector('#num2').value;
    number1 = Number(number1);
    number2 = Number(number2);
    let addresult = number1 % number2;
    document.querySelector('#answer').innerHTML = addresult;
}

function clearResult() {
    document.getElementById('#answer').reset();

}

