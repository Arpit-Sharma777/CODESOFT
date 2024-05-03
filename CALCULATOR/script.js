const resultInput = document.getElementById('result');

let currentValue = '';

function appendToDisplay(value) {
  currentValue += value;
  resultInput.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  resultInput.value = '0';
}

function calculate() {
  try {
    const result = eval(currentValue);
    currentValue = result.toString();
    resultInput.value = currentValue;
  } catch (error) {
    clearDisplay();
    resultInput.value = 'Error';
  }
}

// Add event listener for keyboard input
document.addEventListener("keydown", function(event) {
  var key = event.key;
  if (/\d/.test(key)) { // Check if key is a digit (0-9)
    appendToDisplay(key);
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "=" || key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    // Remove the last character from the display
    var currentDisplay = resultInput.value;
    resultInput.value = currentDisplay.slice(0, -1);
  } else if (key === "C" || key === "Escape") {
    clearDisplay();
  }
});