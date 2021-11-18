let username = "harshit Paliwal";
let url = "https://api.funtranslations.com/translate/minion.json'";

fetch(url)
  .then((Response) => Response.json())
  .then((json) => console.log(json.contents))
  .catch(console.error("something went wrong"))
  .finally(Error);
