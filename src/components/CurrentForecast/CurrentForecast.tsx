import React from 'react';
import type { ICurrentObservation, IForecast } from '../../Interfaces';
import { formatDate, formatTemp } from '../../utils';
import { WeatherIcon, WeatherType } from '../WeatherIcon/WeatherIcon';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import './CurrentForecast.css';

interface ICurrentForecastProps {
  observation: ICurrentObservation;
  forecast?: IForecast;
}

export const CurrentForecast: React.FC<ICurrentForecastProps> = ({ observation }) => {
  if (!observation) return null;
  const weatherType = observation.condition.text;
  const date: string = formatDate(observation.pubDate);
  const temperature = formatTemp(observation.condition.temperature);
  const title = temperature + ' ' + weatherType;
  return (
    <ForecastCard className="current-forecast ">
      <div className="date">Today {date}</div>
      <div className="container">
        <WeatherIcon type={weatherType as WeatherType} size={140} />
        <div>
          <div className="title-wrapper">
            <h2 className="title">{title}</h2>
            <p className="sub-title">Feels Like: {formatTemp(observation.wind.chill)}</p>
            <ul className="additional-info">
              <li>
                <strong>Humidity:</strong> {observation.atmosphere.humidity}%
              </li>
              <li>
                <strong>Wind Speed:</strong> {observation.wind.speed}mph
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ForecastCard>
  );
};
