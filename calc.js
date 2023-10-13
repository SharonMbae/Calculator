const num1Input = document.getElementById("firstnum");
const num2Input = document.getElementById("secondnum");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const output = document.getElementById("output");

addButton.addEventListener("click", performAddition);
subtractButton.addEventListener("click", performSubtraction);
multiplyButton.addEventListener("click", performMultiplication);
divideButton.addEventListener("click", performDivision);

function performAddition() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (!isNaN(num1) && !isNaN(num2)) {
    output.textContent = num1 + num2;
  } else {
    output.textContent = "Invalid input";
  }
}

function performSubtraction() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (!isNaN(num1) && !isNaN(num2)) {
    output.textContent = num1 - num2;
  } else {
    output.textContent = "Invalid input";
  }
}

function performMultiplication() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (!isNaN(num1) && !isNaN(num2)) {
    output.textContent = num1 * num2;
  } else {
    output.textContent = "Invalid input";
  }
}

function performDivision() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
    output.textContent = num1 / num2;
  } else {
    output.textContent = "Invalid input or division by zero";
  }
}