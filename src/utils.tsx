import axios, { AxiosError } from 'axios';

type ClassNameArray = (string | boolean)[];

export const createNumArray = (n: number): number[] => Array.from(Array(n).keys());

export const getClassNames = (c: ClassNameArray): string => c.filter(Boolean).join(' ');

export const formatTemp = (t: string | number) => `${t}\u00B0F`;

export const formatDate = (d: number): string => {
  const date: Date = new Date(d * 1000);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    timeZone: 'UTC',
  });
};

export const getWeather = async (location: string): Promise<any> => {
  const HOST: string = 'yahoo-weather5.p.rapidapi.com';
  const API_KEY: string = process.env.REACT_APP_WEATHER_APIKEY ?? '';
  const API_ENDPOINT = `https://${HOST}/weather`;

  const config = {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST,
    },
    params: {
      location,
      format: 'json',
      u: 'f',
    },
  };

  return axios
    .get(API_ENDPOINT, config)
    .then((res) => res.data)
    .catch((e: AxiosError) => {
      console.error(e);
      throw new Error(e.message);
    });
};
