const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    if (resultDisplay.value === '0') {
        resultDisplay.value = number;
    } else {
        resultDisplay.value += number;
    }
}

function appendOperator(operator) {
    const lastChar = resultDisplay.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        resultDisplay.value = resultDisplay.value.slice(0, -1) + operator;
    } else {
        resultDisplay.value += operator;
    }
}

function clearResult() {
    resultDisplay.value = '0';
}

function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
    if (resultDisplay.value === '') {
        resultDisplay.value = '0';
    }
}

function calculate() {
    try {
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
        setTimeout(() => clearResult(), 1500);
    }
}

// feat: implement number appending logic

// feat: handle arithmetic operators

// feat: add clear and delete functionality
