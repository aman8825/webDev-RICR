document.getElementById("redbox").addEventListener("mouseover",fillRedColor);
document.getElementById("redbox").addEventListener("mouseout",fillBaseColor);

document.getElementById("greenbox").addEventListener("mouseover",fillGreenColor);
document.getElementById("greenbox").addEventListener("mouseout",fillBaseColor);

document.getElementById("bluebox").addEventListener("mouseover",fillBlueColor);
document.getElementById("bluebox").addEventListener("mouseout",fillBaseColor);

document.getElementById("yellowbox").addEventListener("mousemove",fillYellowColor);
document.getElementById("yellowbox").addEventListener("mouseout",fillBaseColor);
function fillRedColor()
{
    document.getElementById("bulb1").style.backgroundColor="red";
}

function fillGreenColor()
{
    document.getElementById("bulb1").style.backgroundColor="green";
}
function fillBlueColor()
{
    document.getElementById("bulb1").style.backgroundColor="blue";
}
function fillYellowColor(){
    document.getElementById("bulb1").style.backgroundColor="yellow";
}
function fillBaseColor()
{
    document.getElementById("bulb1").style.backgroundColor="white";
}
