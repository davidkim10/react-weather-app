import React from 'react';
import type { ICurrentObservation } from '../../Interfaces';
import { formatDate, formatTemp, formatPercent, formatSpeed } from '../../utils';
import { WeatherIcon, WeatherType } from '../WeatherIcon/WeatherIcon';
import { ForecastCard } from '../ForecastCard/ForecastCard';
import './CurrentForecast.css';

interface ICurrentForecastProps {
  observation: ICurrentObservation;
}

export const CurrentForecast: React.FC<ICurrentForecastProps> = ({ observation }) => {
  if (!observation) return null;
  const weatherType: WeatherType = observation.condition.text as WeatherType;
  const humidity: string = formatPercent(observation.atmosphere.humidity);
  const windSpeed: string = formatSpeed(observation.wind.speed);
  const temperature: string = formatTemp(observation.condition.temperature);
  const windChill: string = formatTemp(observation.wind.chill);
  const date: string = formatDate(observation.pubDate);
  const displayDate: string = `Today ${date}`;
  const title: string = `${temperature} ${weatherType}`;
  const subTitle: string = `Feels like ${windChill}`;

  return (
    <ForecastCard className="current-forecast">
      <div className="date">{displayDate}</div>
      <div className="container">
        <WeatherIcon type={weatherType} size={140} />
        <div>
          <div className="title-wrapper">
            <h2 className="title">{title}</h2>
            <p className="sub-title">{subTitle}</p>
            <ul className="data-points">
              <li>
                <strong>Humidity:</strong> {humidity}
              </li>
              <li>
                <strong>Wind Speed:</strong> {windSpeed}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ForecastCard>
  );
};
