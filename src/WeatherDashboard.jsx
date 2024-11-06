import React from 'react';
import CityWeather from './CityWeather';

const cities = [
  { name: 'Nairobi', temperature: 25, condition: 'Sunny' },
  { name: 'Mombasa', temperature: 30, condition: 'Cloudy' },
  { name: 'Kisumu', temperature: 22, condition: 'Rainy' }
];

function WeatherDashboard() {
  return (
    <div>
      <h1>Weather Forecast Dashboard</h1>
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <CityWeather
            key={index}
            name={city.name}
            temperature={city.temperature}
            condition={city.condition}
          />
        ))
      ) : (
        <p>Please select a city</p>
      )}
    </div>
  );
}

export default WeatherDashboard;
