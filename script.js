const API_KEY = "d83efec23e83b1d035be3d8a0187b420";

async function getWeather() {

    const city = document.getElementById("cityInput").value.trim();

    const message = document.getElementById("message");

    if (city === "") {
        message.textContent = "Please enter a city name.";
        return;
    }

    message.textContent = "Loading weather information...";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent =
            data.name;

        document.getElementById("temperature").textContent =
            Math.round(data.main.temp);

        document.getElementById("description").textContent =
            data.weather[0].description;

        document.getElementById("humidity").textContent =
            data.main.humidity;

        document.getElementById("windSpeed").textContent =
            data.wind.speed;

        message.textContent = "";

    } catch (error) {

        message.textContent =
            "Unable to find weather information. Please check the city name.";
    }
}