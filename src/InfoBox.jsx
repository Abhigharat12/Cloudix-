import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const getWeatherImage = (weather) => {
    if (!weather) return "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";
    const condition = weather.toLowerCase();
    if (condition.includes("cloud")) return "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=800&q=80";
    if (condition.includes("rain")) return "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=800&q=80";
    if (condition.includes("clear")) return "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80";
    if (condition.includes("snow")) return "https://images.unsplash.com/photo-1608889175153-5f54a2e03d6f?auto=format&fit=crop&w=800&q=80";
    return "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80";
  };

  if (!info || !info.city) {
    return <h3>No weather info available</h3>;
  }

  const weatherImage = getWeatherImage(info.weather);

  return (
    <div className="InfoBox">
      <div className="cardContent">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={info.weather}
            height="140"
            image={weatherImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp} °C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Min Temp: {info.temp_min} °C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max Temp: {info.temp_max} °C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {info.humidity} %
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feels Like: {info.feelsLike} °C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike} °C
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
