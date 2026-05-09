function Bulb1On() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}
function Bulb1Off() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
function Bulb1Red() {
  document.getElementById("bulb1").style.backgroundColor = "Red";
}
function Bulb1Green() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}
function Bulb1Blue() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}
document.getElementById("bulbRed").addEventListener("click",Bulb1Red);
document.getElementById("bulbGreen").addEventListener("click",Bulb1Green);
document.getElementById("bulbBlue").addEventListener("click",Bulb1Blue);


document.getElementById("bulb1Color").addEventListener("change" ,ChangeBulbColor);
function ChangeBulbColor(){
 const color=   document.getElementById("bulb1Color").value;
 document.getElementById("bulb1").style.backgroundColor = color;
 //document.getElementById("abcd").style.backgroundColor = color;
 document.getElementById("abcd").style.color = color;
}
function reset(){
    window.location.reload();
}

