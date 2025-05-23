import { fetchWeather } from "../utils/api";

export default {
  async execute(location) {
    if (!location)
      throw new Error("Please provide a location (e.g., /weather London)");

    const data = await fetchWeather(location);

    return {
      location: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
    };
  },
};
