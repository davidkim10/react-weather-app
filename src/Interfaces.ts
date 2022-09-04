export interface ILocation {
  city: string;
  region: string;
  woeid: number;
  country: string;
  lat: number;
  long: number;
  timezone_id: string;
}

export interface IWind {
  chill: number;
  direction: number;
  speed: number;
}

export interface IAtmosphere {
  humidity: number;
  visibility: number;
  pressure: number;
  rising: number;
}

export interface IAstronomy {
  sunrise: string;
  sunset: string;
}

export interface ICondition {
  code: number;
  text: string;
  temperature: number;
}

export interface ICurrentObservation {
  wind: IWind;
  atmosphere: IAtmosphere;
  astronomy: IAstronomy;
  condition: ICondition;
  pubDate: number;
}

export interface IForecast {
  day: string;
  date: number;
  low: number;
  high: number;
  text: string;
  code: number;
}

export interface IWeatherData {
  location: ILocation;
  current_observation: ICurrentObservation;
  forecasts: IForecast[];
}
