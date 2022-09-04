import React from 'react';
import { ForecastItem } from '../ForecastItem/ForecastItem';
import type { WeatherType } from '../WeatherIcon/WeatherIcon';
import type { IForecast } from '../../Interfaces';
import './Forecasts.css';

interface IForecastsProps {
  forecasts: IForecast[];
  title?: string;
}

export const Forecasts: React.FC<IForecastsProps> = ({ forecasts = [] }: any) => {
  if (!forecasts.length) return <p>Search for some weather!</p>;
  return (
    <div className="forecasts">
      <div className="forecasts-container">
        {forecasts.map((forecast: IForecast, i: number) => {
          const { day, text: weatherType, high, low, date } = forecast;
          return (
            <ForecastItem
              key={i}
              day={day}
              weatherType={weatherType as WeatherType}
              high={high}
              low={low}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
};
