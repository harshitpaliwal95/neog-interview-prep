let result = document.querySelector(".result");

function change(type) {
  let input = document.querySelector("input");
  input = input.value;

  if (type === "h1") {
    result.innerHTML = `<h1>${input}</h1>`;
  } else if (type === "h2") {
    result.innerHTML = `<h2>${input}</h2>`;
  } else {
    result.innerHTML = `<h3>${input}</h3>`;
  }
}
