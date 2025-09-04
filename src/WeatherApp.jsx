import { useState } from "react"; 
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherInfo, setWeather] = useState({
    city: "Mumbai",
    feelsLike: 37.06,
    humidity: 57,
    temp: 32.39,
    temp_max: 32.39,
    temp_min: 32.39,
    weather: "clear sky",
  });

  const updateInfo = (newInfo) => {
    console.log("Updating weather:", newInfo);
    setWeather(newInfo);
  };

  return (
    <div>
      {/* <h2>Weather App by Abhishek Gharat</h2> */}
      <SearchBox updateInfo={updateInfo} />   {/* must pass here */}
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
