let result = document.querySelector(".result");
function plus() {
  let numOne = document.getElementById("numOne");
  numOne = Number(numOne.value);

  let numTwo = document.getElementById("numTwo");
  numTwo = Number(numTwo.value);

  let plus = numOne + numTwo;

  result.innerHTML = plus;
}
function minus() {
  let numOne = document.getElementById("numOne");
  numOne = Number(numOne.value);

  let numTwo = document.getElementById("numTwo");
  numTwo = Number(numTwo.value);

  let minus = numOne - numTwo;

  result.innerHTML = Math.abs(minus);
}

function multiply() {
  let numOne = document.getElementById("numOne");
  numOne = Number(numOne.value);

  let numTwo = document.getElementById("numTwo");
  numTwo = Number(numTwo.value);

  let multiply = numOne * numTwo;

  result.innerHTML = multiply;
}
function divide() {
  let numOne = document.getElementById("numOne");
  numOne = Number(numOne.value);

  let numTwo = document.getElementById("numTwo");
  numTwo = Number(numTwo.value);

  let divide = numOne / numTwo;

  result.innerHTML = divide;
}
