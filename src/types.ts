type SeriesSize = 'sm' | 'md' | 'lg';

export interface WindData {
  direction: number; // направление ветра в градусах
  speed: number; // скорость ветра в м/с
}

export interface FlightData {
  id: string;
  direction: number; // направление взлета/посадки в градусах
  status: 'arrival' | 'departure';
  time: string;
}

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  showWindData: boolean;
  showFlights: boolean;
  windUpdateInterval: number; // интервал обновления данных о ветре в секундах
  flightsUpdateInterval: number; // интервал обновления данных о рейсах в секундах
}
