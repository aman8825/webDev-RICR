document.getElementById("button").addEventListener("click", showAlert);
document
  .getElementById("doubleClicked")
  .addEventListener("dblclick", dobClicked);
function showAlert() {
  // console.log("Button Click");
  window.alert("Button Clicked");
  document.getElementById("paragraph").innerText = "Button Pressed";
  document.getElementById("bodyBackgound").style.backgroundColor = "black";
  document.getElementById("bodyBackgound").style.color = "white";
}

function dobClicked() {
  window.alert("Double Clicked");
}

document
  .getElementById("dbParagraph")
  .addEventListener("dblclick", changeTextColor);

function changeTextColor() {
  document.getElementById("dbParagraph").style.color = "blue";
}

document
  .getElementById("MouseOverParagraph")
  .addEventListener("mousemove", MouseOverColorChange);

function MouseOverColorChange() {
  document.getElementById("MouseOverParagraph").style.color = "red";
}
document
  .getElementById("heading")
  .addEventListener("mousemove", MouseOverAlert);

function MouseOverAlert() {
  document.getElementById("heading").innerText = "Mouse is here!";
}

document.getElementById("clicked").addEventListener("click",TextChange)

function TextChange(){
    document.getElementById("clicked").innerText="Clicked Successfully";
}

document.getElementById("Para").addEventListener("mousemove",ColorGreen);
function ColorGreen(){
    document.getElementById("Para").style.color="green";
}

document.getElementById("Para").addEventListener("click",Alertmess)
function Alertmess()
{
window.alert("Paragraph Clicked");
}