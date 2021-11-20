let input = document.querySelector("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

input.addEventListener("input", (e) => {
  input = e.target.value;
  if (input.length > 10) {
    btn.disabled = false;
  } else if (input === " ") {
    btn.disabled = false;
    output.textContent = "no space";
  } else {
    btn.disabled = true;
  }
});
function check() {
  if (input.length > 10) {
    output.textContent = "strong passcode";
    output.style.color = "green";
  } else {
    output.textContent = "should be more than 10 char";
    output.style.color = "red";
  }
}
