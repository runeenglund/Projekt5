function myFunction(e) {
  let txt;
  if (confirm("Send besked")) {
    txt = "Din besked er nu sendt!";
  } else {
    txt = "Besked annulleret";
  }
  document.getElementById("demo").innerHTML = txt;
  e.preventDefault()
  console.log(e)
}
