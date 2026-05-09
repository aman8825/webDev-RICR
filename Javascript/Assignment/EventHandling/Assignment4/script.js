document.getElementById("input1").addEventListener("click", clickOutside);
function clickOutside() {
  const value = document.getElementById("input1").value;
  console.log(value);
}

document.querySelector("form").addEventListener("submit", (event) => {
  window.alert("Form Submitted!");
});
document.getElementById("input2").addEventListener("focusin", backgroundColor);
function backgroundColor() {
  document.getElementById("input2").style.backgroundColor = "yellow";
  console.log("Input Selected");
  const value = document.getElementById("input2").value;
  console.log(value);
}

document.querySelector("form").addEventListener("submit", (event) => {
  const value = document.getElementById("alertMess").value;
  window.alert(alertMess);
});
document.getElementById("alertMess").addEventListener("change" ,displayValue);
 function displayValue(){
    const value = document.getElementById("alertMess").value;
    console.log(value);
 }