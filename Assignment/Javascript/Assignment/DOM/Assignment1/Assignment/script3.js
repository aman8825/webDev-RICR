function Submit() {
    const Email = document.getElementById("email").value;
  const Passward = document.getElementById("Passward").value;
  document.getElementById("myData3").innerText = Email;
  document.getElementById("myData4").innerText = Passward;
 
  document.getElementById("myData3").value = " ";
 
  document.getElementById("dataCard").classList.add("divShow");
   document.getElementById("dataCard").classList.remove("divHide");
}