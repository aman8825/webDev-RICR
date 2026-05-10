document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const bill = document.getElementById("billAmount").value;
  const service = Number(document.getElementById("Service").value);
  const person = Number(document.getElementById("PersonNumber").value);
  console.log(service);
  const tip = (bill * service/100)/person;
  document.getElementById("billAmount").value="";
  document.getElementById("Service").value="";
   document.getElementById("PersonNumber").value="";
  document.getElementById("Tip").innerText=tip +"₹";
});
