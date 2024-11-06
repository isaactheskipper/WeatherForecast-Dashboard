import React from 'react';

function CityWeather({ name, temperature, condition }) {
  return (
    <div className="city-weather">
      <h2>{name}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default CityWeather;
