const axios = require("axios");

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`;

    const response = await axios.get(url);
    const data = response.data;

    return {
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        description: data.weather[0].description,
        coordinates: data.coord,
        wind_speed: data.wind.speed,
        country: data.sys.country,
        rain: data.rain ? data.rain["3h"] : 0
    };
};

module.exports = { getWeather };
