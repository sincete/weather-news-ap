async function getData() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Enter a city name");
        return;
    }

    // Weather
    const weatherRes = await fetch(`/api/weather/${city}`);
    const weather = await weatherRes.json();

    document.getElementById("weather").innerHTML = `
    <h3>Weather</h3>
    <p> Temperature: ${weather.temperature} °C</p>
    <p> Feels like: ${weather.feels_like} °C</p>
    <p> Description: ${weather.description}</p>
    <p> Wind: ${weather.wind_speed} m/s</p>
    <p> Country: ${weather.country}</p>
    <p> Rain (3h): ${weather.rain} mm</p>
  `;

    // News
    const newsRes = await fetch(`/api/news/${weather.country.toLowerCase()}`);
    const news = await newsRes.json();

    let newsHTML = "<h3>Top News</h3>";
    news.forEach(article => {
        newsHTML += `
      <p>
         <a href="${article.url}" target="_blank">
        ${article.title}
        </a>
      </p>
    `;
    });

    document.getElementById("news").innerHTML = newsHTML;
}
