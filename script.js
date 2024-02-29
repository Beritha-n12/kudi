// Getting the result input field
const resultInput = document.getElementById('result');

// Clear the result field
function clearResult() {
    resultInput.value = '';
}

// Append a number to the result field
function appendNumber(number) {
    resultInput.value += number;
}

// Append a decimal point to the result field
function appendDecimal() {
    if (!resultInput.value.includes('.')) {
        resultInput.value += '.';
    }
}

// Set the operator to perform calculations
function setOperator(operator) {
    resultInput.value += operator;
}

// Perform the calculation and store the result in local storage
function calculate() {
    try {
        const result = eval(resultInput.value);
        resultInput.value = result;
        localStorage.setItem('calculatorResult', result);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

// Check if there is a stored result in local storage
window.onload = function () {
    const storedResult = localStorage.getItem('calculatorResult');
    if (storedResult) {
        resultInput.value = storedResult;
    }
};
