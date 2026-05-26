const API_KEY = "Your-API-Key";

const userSelect = document.getElementById("UserCountry");
const outputSelect = document.getElementById("OutputCountry");

async function loadCurrencyOptions() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`;

  const response = await fetch(url);
  const data = await response.json();

  const rates = data.conversion_rates;
const lastUpdate=data.time_last_update_utc.split(" 00:")[0];
document.getElementById("time1").innerText="Last Updated: "+lastUpdate;
const nextUpdate=data.time_next_update_utc.split(" 00:")[0];
document.getElementById("time2").innerText="Next Updated: "+nextUpdate;
  Object.keys(rates).forEach((currencyCode) => {
    const option1 = document.createElement("option");
    option1.value = currencyCode;
    option1.innerText = currencyCode;

    const option2 = document.createElement("option");
    option2.value = currencyCode;
    option2.innerText = currencyCode;

    userSelect.appendChild(option1);
    outputSelect.appendChild(option2);
  });
}

loadCurrencyOptions();

async function convert() {
  const UserCountry = document.getElementById("UserCountry").value;
  const OutputCountry = document.getElementById("OutputCountry").value;
  const amount = document.getElementById("amount").value;

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${UserCountry}`;
   const userSelectValue = document.getElementById("UserCountry").value;
 const flagCode1 = userSelectValue.slice(0, -1);

  document.getElementById("flagImg1").src =
  `https://flagsapi.com/${flagCode1}/shiny/64.png`;
 const outputSelectValue = document.getElementById("OutputCountry").value;
 const flagCode2 = outputSelectValue.slice(0, -1);
 
  document.getElementById("flagImg2").src =
  `https://flagsapi.com/${flagCode2}/shiny/64.png`;

  const response = await fetch(url);
  const data = await response.json();

  const rate = data.conversion_rates[OutputCountry];
  const result = amount * rate;
document.getElementById("display").innerText=1+ userSelectValue+ "="+rate+ outputSelectValue;
  document.getElementById("output").innerText = result.toFixed(2);
  
  
}

