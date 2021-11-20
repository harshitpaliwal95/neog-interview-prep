let input = document.querySelector("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.disabled = true;

input.addEventListener("input", (e) => {
  input = e.target.value;
  if (input.length > 10) {
    btn.disabled = false;
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
