let fontSize = 16;

function changeSize(type) {
  let output = document.querySelector(".output");
  let input = document.querySelector("input");
  input = input.value;
  if (type == "increase") {
    fontSize += 2;
    output.innerHTML = input;

    output.style.fontSize = `${fontSize}px`;
  } else {
    fontSize -= 2;
    output.innerHTML = input;
    output.style.fontSize = `${fontSize}px`;
  }
}
