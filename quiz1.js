var c = 0;
var i = 0;

function correct(current_button) {
  alert("Nice Job! You Got It Correct");
  current_button.style.backgroundColor = "green";
  c = c + 1;
  document.getElementById("correct").innerHTML = "Correct: " + c;
}
function incorrect(current_button) {
  alert("Sorry! You got it wrong");
  current_button.style.backgroundColor = "red";
  i = i + 1;
  document.getElementById("incorrect").innerHTML = "Incorrect: " + i;
}
