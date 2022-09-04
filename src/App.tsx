import React, { useEffect, useState, useRef } from 'react';
import { Layout } from './components/Layout/Layout';
import { Section } from './components/Section/Section';
import { Forecasts } from './components/Forecasts/Forecasts';
import { CurrentForecast } from './components/CurrentForecast/CurrentForecast';
import { getWeather } from './utils';
import type { ICurrentObservation, IForecast, IWeatherData } from './Interfaces';
import './App.css';

function App() {
  const setDefaultWeather = useRef(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [forecast, setForecast] = useState<IForecast[]>([]);
  const [weather, setWeather] = useState<IWeatherData>();
  const [title, setTitle] = useState<string>('Asbury Park, NJ');
  const [currentObservation, setCurrentObservation] = useState<ICurrentObservation>();

  useEffect(() => {
    if (setDefaultWeather.current) return;
    setDefaultWeather.current = true;
    handleSearch('10001');
  }, []);

  useEffect(() => {
    if (!weather) return;
    const current = weather.current_observation;
    const city = weather.location.city;
    const state = weather.location.region;
    const location = `${city}, ${state}`;
    setTitle(location);
    setCurrentObservation(current);
    setForecast(weather.forecasts.slice(1));
  }, [weather]);

  const handleSearch = (query: string) => {
    if (!query) {
      setError('Please enter a valid ZIP code');
    } else {
      setError('');
      setLoading(true);
      getWeather(query)
        .then((w) => setWeather(w))
        .catch((e) => {
          console.error(e);
          setError(e);
        })
        .finally(() => {
          setSearchQuery('');
          setLoading(false);
          setError('');
        });
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  return (
    <div className="App">
      <Layout
        isEmptyState={forecast.length <= 0}
        isLoading={loading}
        error={error}
        onChange={handleInputChange}
        onClick={() => handleSearch(searchQuery)}
        onKeyUp={handleKeyUp}
        value={searchQuery}
      >
        <Section title={title}>
          {currentObservation && <CurrentForecast observation={currentObservation} />}
        </Section>
        <Section title="10 Day Forecast">
          <Forecasts forecasts={forecast} />
        </Section>
      </Layout>
    </div>
  );
}

export default App;
