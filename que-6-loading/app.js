function hide() {
  let loading = document.querySelector("#loading");
  //   only to hide it
  //   loading.style.display = "none";

  //   if need togle
  if (loading.style.display === "") {
    loading.style.display = "none";
  } else {
    loading.style.display = "";
  }
}
