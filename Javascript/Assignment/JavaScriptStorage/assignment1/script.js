localStorage.setItem("UserName","Amit");
const User=localStorage.getItem("UserName");
console.log(User);
localStorage.setItem("theme","dark");
const theme=localStorage.getItem("theme");
console.log(theme);
document.cookie="user=Rahul";
console.log(document.cookie);
localStorage.setItem("city","Mumbai");
console.log(localStorage.getItem("city"));
localStorage.setItem("userName","Raj");
localStorage.setItem("theme","Light");
console.log(localStorage.getItem("userName"));
console.log(localStorage.getItem("theme"));
function reset()
{
    // localStorage.removeItem("userName");
    localStorage.clear();
}
function submit(){
const name=document.getElementById("FullName").value;
localStorage.setItem("Name",name);
console.log(localStorage.getItem("Name"));
const textArea=document.getElementById("textArea").value;
localStorage.setItem("text",textArea);
console.log(localStorage.getItem("text"));

document.querySelector("h1").innerText=localStorage.getItem("Name");
}