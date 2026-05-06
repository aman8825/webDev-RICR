function Submit() {
    console.log("Button Clicked");
const fn1 = document.getElementById("firstName").value;
const fn2 = document.getElementById("lastName").value;
document.getElementById("myData5").innerText = "Full Name: "+fn1+" "+fn2;
  document.getElementById("myData5").value = " ";

   document.getElementById("dataCard").classList.add("divShow");
   document.getElementById("dataCard").classList.remove("divHide");
}

