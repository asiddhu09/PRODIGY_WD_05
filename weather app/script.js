function searchWeather() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value;

  if (city === "") {
    document.getElementById("error").textContent = "Please enter a city.";
  } else {
    document.getElementById("error").textContent = "";

    const apiKey = "6bcb7876156b01a604ab9271a64edf9a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById("city").textContent = `City: ${cityName}`;
        document.getElementById(
          "temperature"
        ).textContent = `Temperature: ${temperature}°C`;
        document.getElementById(
          "description"
        ).textContent = `Description: ${description}`;
      })
      .catch((error) => {
        document.getElementById("error").textContent = "City not found.";
      });
  }
}
