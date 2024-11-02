let inputBox = document.getElementById('inputBox');
let currentInput = '';

function appendValue(value) {
    if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput += value;
    }
    inputBox.value = currentInput;
}


function clearInput() {
    currentInput = '';
    inputBox.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        inputBox.value = currentInput;
    } catch (error) {
        inputBox.value = 'Error';
    }
}
