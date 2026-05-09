document.getElementById("input").addEventListener("keydown", InputText);
function InputText() {
  console.log("Key Pressed");
}
document.getElementById("KeyReleased").addEventListener("keyup", KeyReleased);
function KeyReleased() {
  console.log("Key Released");
}
document.getElementById("EnterKey").addEventListener("keydown", (event) => {
  let keyPress = event.key;
  keyPress === "Enter" && window.alert("Enter key is pressed.");
});
document.getElementById("typedValue").addEventListener("keyup", (event)=>
{console.log(event.key)

});

document.getElementById("ParagraphText").addEventListener("keyup", (event)=>{
const text=event.key;
document.getElementById("para").innerText=text;
});
document.getElementById("checkA").addEventListener("keydown",(event)=>{
    let key=event.key;
    key==="a"&& window.alert("a pressed")
});
document.getElementById("typingStop").addEventListener("keydown",Typing);
document.getElementById("typingStop").addEventListener("keyup",Stoped);
function Typing(){
    console.log("Typing...");
}
function Stoped(){
    console.log("Stopped typing");
}
document.getElementById("Log").addEventListener("keydown" ,(event) =>{
console.log(event.key);
console.log(event.code);
})

document.getElementById("borderColor").addEventListener("keydown",borderRed);
function borderRed(){document.getElementById("borderColor").style.border="4px solid red";
    
}
document.getElementById("borderColor").addEventListener("keyup",borderBlack);
function borderBlack(){document.getElementById("borderColor").style.border="4px solid black";
    
}
