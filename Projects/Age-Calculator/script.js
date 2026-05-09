document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const dob = document.getElementById("DOB").value;
  const curDate = document.getElementById("CurrentDate").value;

//   let CurrYear=Number(curDate.split("-")[0]) ;
//   let dobDate=Number(dob.split("-")[0]);
//   const Age=CurrYear-dobDate;
  const Age = Number(curDate.split("-")[0]) - Number(dob.split("-")[0]);

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";
  document.getElementById("MyAge").innerText = Age;
});
