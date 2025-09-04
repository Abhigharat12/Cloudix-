import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");   // <-- FIX: add city state
  const [error, setError] = useState(false); // <-- optional error state

  const API_KEY = "28770f637dec1c060d02e01c5021d432";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";

  console.log("SearchBox props:", { updateInfo });

  let getWeatherInfo = async (cityName) => {
    try {
      let response = await fetch(`${API_URL}q=${cityName}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      console.log("API Response:", data);

      if (data.cod !== 200) {
        throw new Error(data.message); // <-- handle API error like "city not found"
      }

      let result = {
        city: data.name,
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log("Parsed Result:", result);
      return result;
    } catch (err) {
      console.error("Fetch Error:", err.message);
      throw err;
    }
  };

  function handleChange(event) {
    setCity(event.target.value);
  }

async function handleSubmit(event) {
  event.preventDefault();
  try {
    let newInfo = await getWeatherInfo(city.trim());
    updateInfo(newInfo);
    setError(false);
    // clear input AFTER state update
    setTimeout(() => setCity(""), 500);
  } catch (err) {
    console.error("Error fetching weather:", err.message);
    setError(true);
  }
}


  return (
    <div className="search-box">
      <h3 className="h3">Search for Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Enter City Name"
          variant="outlined"
          onChange={handleChange}
          value={city}
          required
        />
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>

      {error && <p style={{ color: "red" }}>City not found. Please try again.</p>}
    </div>
  );
}
