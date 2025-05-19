import React, { ReactNode } from 'react';
import { ReactComponent as DropIcon } from '../assets/icons/drop.svg';
import { ReactComponent as HazeIcon } from '../assets/icons/haze.svg';
import { ReactComponent as SnowflakeIcon } from '../assets/icons/snowflake.svg';
import { ReactComponent as Wind01Icon } from '../assets/icons/wind-01.svg';
import { TWeatherIconCode } from '../types/index';

export const colorEyeRegardingVisibleHandler = (visibility: number) => {
  if (visibility < 500 || visibility === 500) {
    return '#EA2929';
  }

  if (visibility > 500 && visibility < 4600) {
    return '#F8F844';
  }

  return '#22C55E';
};

const colorHandler = (state: 'weak' | 'medium' | 'strong') => {
  return {
    weak: '#22C55E',
    medium: '#DE7A00',
    strong: '#C42D2D',
  }[state];
};

const snowflakeIcon = (state: 'weak' | 'medium' | 'strong') => (
  <SnowflakeIcon
    width={16}
    height={16}
    color={colorHandler(state)}
  />
);
const dropIcon = (state: 'weak' | 'medium' | 'strong') => (
  <DropIcon
    width={16}
    height={16}
    color={colorHandler(state)}
  />
);

const hazeIcon = (state: 'weak' | 'medium' | 'strong') => (
  <HazeIcon
    width={16}
    height={16}
    color={colorHandler(state)}
  />
);

export const windIcon = (windIntens: number, windForce: number | null, theme: 'light' | 'dark') => {
  let value: number;

  if (windForce === null) {
    value = windIntens;
  } else {
    value = Math.max(windIntens, windForce);
  }

  let state: 'weak' | 'medium' | 'strong' = 'weak';

  if (value > 14 && value < 21) {
    state = 'medium';
  }

  if (value > 20) {
    state = 'strong';
  }

  return (
    <Wind01Icon
      width={16}
      height={16}
      color={colorHandler(state)}
    />
  );
};

export const specialEventIconHandler = (iconCode: TWeatherIconCode | null): ReactNode => {
  switch (iconCode) {
    case '-SN':
    case '-GS':
      return snowflakeIcon('weak');

    case 'SN':
    case 'GS':
      return snowflakeIcon('medium');

    case '+SN':
    case '+GS':
      return snowflakeIcon('strong');

    case '-RA':
    case '-GR':
      return dropIcon('weak');

    case 'RA':
    case 'GR':
      return dropIcon('medium');
    case '+RA':
    case '+GR':
      return dropIcon('strong');
    case '-BR':
    case '-FG':
    case '-FU':
      return hazeIcon('weak');

    case 'BR':
    case 'FG':
    case 'FU':
      return hazeIcon('medium');

    case '+BR':
    case '+FG':
    case '+FU':
      return hazeIcon('strong');

    default:

      return undefined;
  }
};

export const formatTemperature = (temp: number) => `${temp} °C`;

export const formatVisibility = (visibility: number) => {
  const visibleLong = Number((visibility / 1000).toFixed(1));

  return `${visibleLong} km${visibleLong === 10
    ? '+'
    : ''}`;
};

export const formatWindSpeed = (speed: number) => `${speed} m/s`;
export const formatPressure = (pressure: number) => `${pressure} hPa`;
