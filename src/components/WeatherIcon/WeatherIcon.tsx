import React from 'react';

export enum WeatherType {
  Cloudy = 'Cloudy',
  PartlyCloudy = 'Partly Cloudy',
  MostlyCloudy = 'Mostly Cloudy',
  Sunny = 'Sunny',
  PartlySunny = 'Partly Sunny',
  MostlySunny = 'Mostly Sunny',
  Snow = 'Snow',
  HeavySnow = 'Heavy Snow',
  RainAndSnow = 'Rain And Snow',
  Rain = 'Rain',
  Showers = 'Showers',
  ScatteredShowers = 'Scattered Showers',
  Thunderstorms = 'Thunderstorms',
  ScatteredThunderstorms = 'Scattered Thunderstorms',
  Windy = 'Windy',
  Wind = 'Wind',
}

interface IWeatherIcon {
  type: WeatherType;
  size?: number;
}

export const WeatherIcon: React.FC<IWeatherIcon> = ({ type, size = 40 }) => {
  let imageSrc = '';
  switch (type) {
    case WeatherType.PartlyCloudy:
    case WeatherType.PartlySunny:
      imageSrc = 'partly-cloudy.png';
      break;
    case WeatherType.MostlyCloudy:
    case WeatherType.Cloudy:
      imageSrc = 'cloudy.png';
      break;
    case WeatherType.Sunny:
    case WeatherType.MostlySunny:
      imageSrc = 'sunny.png';
      break;
    case WeatherType.ScatteredShowers:
    case WeatherType.Showers:
      imageSrc = 'showers.png';
      break;
    case WeatherType.Snow:
    case WeatherType.RainAndSnow:
    case WeatherType.HeavySnow:
      imageSrc = 'snow.png';
      break;
    case WeatherType.Rain:
      imageSrc = 'rain.png';
      break;
    case WeatherType.ScatteredThunderstorms:
      imageSrc = 'scattered-thunderstorms.png';
      break;
    case WeatherType.Thunderstorms:
      imageSrc = 'thunderstorms.png';
      break;
    case WeatherType.Wind:
    case WeatherType.Windy:
      imageSrc = 'windy.png';
      break;
  }
  return (
    <img
      src={`/icons/${imageSrc}`}
      alt="weather icon"
      height={`${size}px`}
      width={`${size}px`}
    />
  );
};
