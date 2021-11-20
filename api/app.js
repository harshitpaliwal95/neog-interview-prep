let url = "https://api.funtranslations.com/translate/minion.json?text=hello";
function check() {
  fetch(url)
    .then((Response) => Response.json())
    .then((json) => {
      console.log(json.contents);
    });
}
