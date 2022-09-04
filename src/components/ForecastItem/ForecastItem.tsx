import React from 'react';
import { formatDate, formatTemp } from '../../utils';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import { WeatherIcon, WeatherType } from '../WeatherIcon/WeatherIcon';

interface IForecastItemProps {
  day: string;
  date: number;
  low: number;
  high: number;
  weatherType: WeatherType;
}

export const ForecastItem: React.FC<IForecastItemProps> = (props) => {
  const { day, date, high, low, weatherType } = props;
  return (
    <ForecastCard className="forecast-item">
      <WeatherIcon type={weatherType} />
      <h3 className="description">{weatherType}</h3>
      <span className="date">
        {day} {formatDate(date)}
      </span>
      <div className="temp">
        <span>H: {formatTemp(high)}</span>
        <span className="temp-break">|</span>
        <span>L :{formatTemp(low)}</span>
      </div>
    </ForecastCard>
  );
};
