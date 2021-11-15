const output = document.querySelector(".output");
function change(type) {
  let input = document.querySelector("input");
  input = input.value;
  let changeColor;

  if (type === "blue") {
    output.innerHTML = input.fontcolor("blue");
  } else if (type === "red") {
    output.innerHTML = input.fontcolor("red");
  } else {
    output.innerHTML = input.fontcolor("green");
  }
}
