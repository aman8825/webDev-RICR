document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const qualification = document.querySelector(
      "input[name='qualification']:checked",
    )?.value;
    const perc = document.getElementById("marks").value;
    const course = document.querySelector(
      "input[name='course']:checked",
    )?.value;
   const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;

    // console.log(fn);
    // console.log(email);
    // console.log(ph);
    // console.log(dob);
    // console.log(gndr);
    // console.log(qual);
    // console.log(perc);
    // console.log(course);
    // console.log(timings);

    const registrationData={
      
    }
  });
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();
  window.location.reload();
  })
