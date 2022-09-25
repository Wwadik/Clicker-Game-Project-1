let counter = 0;
function evilClick() {
  counter++;
  if (counter == 2) {
    alert("you failed my test of not clicking this button.");
  } else if (counter == 4) {
    alert("now you can leave.");
  } else if (counter == 6) {
    alert("there is nothing else for you here");
  } else if (counter == 8) {
    alert("Please Stop");
  }
}
