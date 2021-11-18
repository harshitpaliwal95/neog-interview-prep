let url = "https://api.funtranslations.com/translate/minion.json";

function errorHandling(res) {
  if (res.status === 404) {
    console.error("page not found");
  } else if (res.status === 401) {
    console.error("you are not logged in");
  } else {
    console.error("something went wrong");
  }
}

fetch(url)
  .then(errorHandling(Response))
  .then((Response) => Response.json())
  .then((json) => {
    console.log(json.contants);
  })
  .catch(Error);
