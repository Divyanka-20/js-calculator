let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
  if (display.innerText === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    display.innerText = 'Error';
    currentInput = '';
  }
}
