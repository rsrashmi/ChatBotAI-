import axios from "axios";

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const DICTIONARY_API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        location
      )}&units=metric&appid=${WEATHER_API_KEY}`
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Weather service unavailable");
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Weather Error: ${error.message}`);
  }
};

export const fetchDefinition = async (word) => {
  try {
    const response = await axios.get(
      `${DICTIONARY_API_URL}/${encodeURIComponent(word)}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch definition"
    );
  }
};
