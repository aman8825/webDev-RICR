document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const randomNumber = (Math.random() * 10) ;

  const number = Number(document.getElementById("input").value);

  console.log(randomNumber);

  if (number == randomNumber) {
    window.alert("Correct!");
  } 
  else if (number < randomNumber) {
    window.alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } 
  else {
    window.alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  }
});
