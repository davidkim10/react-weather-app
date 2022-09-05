import axios, { AxiosError } from 'axios';

type ClassNameArray = (string | boolean)[];

interface IWeatherParams {
  format: string;
  u: string;
  location?: string;
  lat?: string;
  long?: string;
}

export interface ILocationCoordinates {
  lat: string;
  long: string;
}

export type LocationType = string | ILocationCoordinates;

export const createNumArray = (n: number): number[] => Array.from(Array(n).keys());

export const getClassNames = (c: ClassNameArray): string => c.filter(Boolean).join(' ');

export const formatSpeed = (val: string | number): string => `${val}mph`;

export const formatPercent = (n: number): string => `${n}%`;

export const formatTemp = (t: string | number): string => `${t}\u00B0F`;

export const formatDate = (d: number): string => {
  return new Date(d * 1000).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    timeZone: 'UTC',
  });
};

export const getLocation = (success: PositionCallback, error: PositionErrorCallback) => {
  if (navigator.geolocation) navigator.geolocation.getCurrentPosition(success, error);
};

export const getWeather = async (location: LocationType): Promise<any> => {
  const HOST: string = 'yahoo-weather5.p.rapidapi.com';
  const API_KEY: string = process.env.REACT_APP_WEATHER_APIKEY ?? '';
  const API_ENDPOINT = `https://${HOST}/weather`;
  const params: IWeatherParams = {
    format: 'json',
    u: 'f',
  };

  if (typeof location === 'string') params.location = location;
  else Object.assign(params, location);

  const config = {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST,
    },
    params,
  };

  return axios
    .get(API_ENDPOINT, config)
    .then((res) => res.data)
    .catch((e: AxiosError) => {
      console.error(e);
      throw new Error(e.message);
    });
};
