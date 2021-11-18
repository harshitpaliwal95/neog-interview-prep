const output = document.querySelector(".output");
let input = document.querySelector("input");
input.addEventListener("input", (e) => {
  output.innerHTML = e.target.value;
});
function change(type) {
  if (type === "blue") {
    output.style.color = "blue";
  } else if (type === "red") {
    output.style.color = "red";
  } else {
    output.style.color = "green";
  }
}
