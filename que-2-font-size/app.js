let fontSize = 16;
let output = document.querySelector(".output");
let input = document.querySelector("input");

input.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
});

function changeSize(type) {
  if (type == "increase") {
    fontSize += 2;
    output.style.fontSize = `${fontSize}px`;
  } else {
    fontSize -= 2;
    output.style.fontSize = `${fontSize}px`;
  }
}
