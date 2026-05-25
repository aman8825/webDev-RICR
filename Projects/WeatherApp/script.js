
const API_KEY="Your_API_Key";


async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  //   console.log({ Lattitude, Longitude });

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  //console.log(data);

  const temperature = data.main.temp - 273.15;
  const humidity = data.main.humidity ;
  const Temp_min = data.main.temp_min ;
  const Temp_max = data.main.temp_max;

  document.getElementById("Temperature").innerText = temperature.toFixed(2);
  document.getElementById("Humidity").innerText = humidity.toFixed(2);
  document.getElementById("Temp_min").innerText = Temp_min.toFixed(2);
  document.getElementById("Temp_max").innerText = Temp_max.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  //   console.log(data);

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}