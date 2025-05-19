import React, { useMemo } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions, WindData, FlightData } from 'types';
import { useTheme2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';
import { css } from '@emotion/css';
import logo from '../img/logo.svg';
import { AirplaneCard } from './AirplaneCard/AirplaneCard';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const theme = useTheme2();

  // Парсинг данных о ветре
  const windData = useMemo(() => {
    const windSeries = data.series.find(series => 
      series.fields.some(field => field.name === 'wind_direction' || field.name === 'wind_speed')
    );
    
    if (!windSeries) {
      return null;
    }

    const directionField = windSeries.fields.find(field => field.name === 'wind_direction');
    const speedField = windSeries.fields.find(field => field.name === 'wind_speed');

    if (!directionField || !speedField) {
      return null;
    }

    return {
      direction: directionField.values.get(directionField.values.length - 1),
      speed: speedField.values.get(speedField.values.length - 1)
    } as WindData;
  }, [data.series]);

  // Парсинг данных о рейсах
  const flights = useMemo(() => {
    const flightSeries = data.series.find(series => 
      series.fields.some(field => field.name === 'flight_id')
    );

    if (!flightSeries) {
      return [];
    }

    const idField = flightSeries.fields.find(field => field.name === 'flight_id');
    const directionField = flightSeries.fields.find(field => field.name === 'direction');
    const statusField = flightSeries.fields.find(field => field.name === 'status');
    const timeField = flightSeries.fields.find(field => field.name === 'time');

    if (!idField || !directionField || !statusField || !timeField) {
      return [];
    }

    const flights: FlightData[] = [];
    for (let i = 0; i < idField.values.length; i++) {
      flights.push({
        id: idField.values.get(i),
        direction: directionField.values.get(i),
        status: statusField.values.get(i),
        time: timeField.values.get(i)
      });
    }

    return flights;
  }, [data.series]);

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  const styles = {
    container: css`
      padding: ${theme.spacing(2)};
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(2)};
    `,
    windSection: css`
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(1)};
      padding: ${theme.spacing(2)};
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius(1)};
    `,
    flightsSection: css`
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing(1)};
    `,
    flightItem: css`
      padding: ${theme.spacing(1)};
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius(1)};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    windDirection: css`
      font-size: ${theme.typography.h2.fontSize};
      font-weight: ${theme.typography.h2.fontWeight};
    `,
    windSpeed: css`
      font-size: ${theme.typography.h3.fontSize};
      color: ${theme.colors.text.secondary};
    `
  };

  return (
    <div className={styles.container}>
      <AirplaneCard
        title="Airplane Card"
        content="Airplane Card Content"
      />
      <img src={logo} alt="Logo" style={{ width: 48, height: 48, alignSelf: 'center' }} />
      {options.showWindData && windData && (
        <div className={styles.windSection}>
          <div className={styles.windDirection}>
            Направление ветра: {windData.direction}°
          </div>
          <div className={styles.windSpeed}>
            Скорость ветра: {windData.speed} м/с
          </div>
        </div>
      )}

      {options.showFlights && (
        <div className={styles.flightsSection}>
          {flights.map((flight) => (
            <div key={flight.id} className={styles.flightItem}>
              <div>
                <strong>{flight.id}</strong>
                <div>Направление: {flight.direction}°</div>
                <div>Время: {flight.time}</div>
              </div>
              <div>
                {flight.status === 'arrival' ? 'Прилет' : 'Вылет'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
