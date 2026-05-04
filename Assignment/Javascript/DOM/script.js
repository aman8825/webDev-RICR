function Submit() {
  console.log("Submit Button Click");
  const fn = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  console.log(fn);
  
  document.getElementById("myData").innerText = fn;
  document.getElementById("myData2").innerText = city;
  document.getElementById("myData").value = "";

  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}
