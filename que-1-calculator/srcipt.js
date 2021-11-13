let result = document.querySelector(".result");
function calc(type) {
  let numOne = document.querySelector("#numOne");
  numOne = Number(numOne.value);
  let numTwo = document.querySelector("#numTwo");
  numTwo = Number(numTwo.value);

  if (type === "plus") {
    result.innerHTML = numOne + numTwo;
  } else if (type === "minus") {
    result.innerHTML = Math.abs(numOne - numTwo);
  } else if (type === "multiply") {
    result.innerHTML = numOne * numTwo;
  } else {
    result.innerHTML = numOne / numTwo;
  }
}
