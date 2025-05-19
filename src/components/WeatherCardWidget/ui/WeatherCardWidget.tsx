import React from 'react';
import {
  Divider, EyeOpenIcon, HStack, Icon, Typography, VStack,
} from '@krap/common';
import { ReactComponent as Vpp } from '../../assets/icons/Vpp.svg';
import { ReactComponent as Compass } from '../../assets/icons/Сompass.svg';
import {
  WEATHER_ICON_DATA,
} from '../const';
import {
  colorEyeRegardingVisibleHandler, formatPressure,
  formatTemperature,
  formatVisibility,
  formatWindSpeed,
  specialEventIconHandler,
  windIcon,
} from '../helpers';
import {
  TCeilingIconStatus, TWeatherIconCode,
} from '../types';
import { WeatherInfoSection } from './WeatherInfoSection';
import cls from './WeatherCardWidget.module.scss';

interface WeatherCardWidgetProps {
  ceiling_icon_status: TCeilingIconStatus
  visibility: number
  temperature: number
  ceiling: string
  weather: string | null
  icon_code: TWeatherIconCode | null
  windintens: number
  winddir: number
  windforce1: number | null
  pressure: number
  theme: 'light' | 'dark'
}

const WeatherCardWidget = ({
  ceiling_icon_status,
  visibility,
  temperature,
  ceiling,
  weather,
  icon_code,
  windintens,
  winddir,
  windforce1,
  pressure,
  theme,
}: WeatherCardWidgetProps) => {
  const weatherIconInfo = WEATHER_ICON_DATA[ceiling_icon_status];
  const hasWindGusts = windforce1 !== null;

  return (
    <VStack
      max
      className={`${cls.card} ${cls[`card--${theme}`]}`}
    >
      <VStack
        gap={8}
        max
      >
        {/* Header with location and temperature */}
        <HStack
          max
          justify="between"
        >
          <Typography.Body className={cls.location}>Metar SVO</Typography.Body>
          <Typography.Body className={cls.temperature}>
            {formatTemperature(temperature)}
          </Typography.Body>
        </HStack>

        {/* Cloudiness section */}
        <WeatherInfoSection
          title="Облачность"
          content={
            weatherIconInfo
              ? (
                <HStack
                  gap={4}
                  max
                  align="center"
                >
                  {weatherIconInfo.icon}
                  <Typography.Body
                    title={weatherIconInfo.title}
                    level={3}
                  >
                    {weatherIconInfo.title}
                  </Typography.Body>
                </HStack>
              )
              : <Typography.Body level={3}>---</Typography.Body>
          }
          theme={theme}
        />

        {/* Visibility section */}
        <WeatherInfoSection
          title="Видимость"
          content={(
            <HStack gap={4}>
              <EyeOpenIcon
                size={16}
                color={colorEyeRegardingVisibleHandler(visibility)}
              />
              <Typography.Body level={3}>
                {formatVisibility(visibility)}
              </Typography.Body>
              <Typography.Body
                title={ceiling}
                level={3}
              >
                {ceiling}
              </Typography.Body>
            </HStack>
          )}
          theme={theme}
        />

        {/* Special weather phenomena */}
        <WeatherInfoSection
          title="Особые явления"
          content={(
            <HStack gap={4}>
              {icon_code && <HStack>{specialEventIconHandler(icon_code)}</HStack>}
              <Typography.Body level={3}>
                {weather || 'Отсутствуют'}
              </Typography.Body>
            </HStack>
          )}
          theme={theme}
        />

        {/* Wind information */}
        <HStack
          max
          justify="between"
        >
          <WeatherInfoSection
            title="Ветер"
            content={(
              <HStack gap={2}>
                {windIcon(windintens, windforce1, theme)}
                <Typography.Body level={3}>{`${winddir}°`}</Typography.Body>
              </HStack>
            )}
            compact
            theme={theme}
          />

          <Divider
            position="vertical"
            size={34}
            className={cls.divider}
          />

          <WeatherInfoSection
            title="Скорость"
            content={(
              <Typography.Body level={3}>
                {formatWindSpeed(windintens)}
              </Typography.Body>
            )}
            compact
            theme={theme}
          />

          <Divider
            position="vertical"
            size={34}
            className={cls.divider}
          />

          <WeatherInfoSection
            title="Порывы"
            content={(
              <Typography.Body level={3}>
                {hasWindGusts
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  ? formatWindSpeed(windforce1!)
                  : '---'}
              </Typography.Body>
            )}
            compact
            theme={theme}
          />
        </HStack>

        {/* Wind direction compass */}
        <HStack
          max
          justify="center"
          className={cls.compass}
        >
          <Icon
            Svg={Compass}
          />
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform={`rotate(${winddir})`}
            className={cls.compassArrow}
          >
            <path
              d="M90 172L90 7"
              stroke="currentColor"
            />
            <g clipPath="url(#clip1_17305_114947)">
              <path
                d="M89.9844 12L80.9844 -4.76837e-07L89.9727 4.80469L98.9844 -4.76837e-07L89.9844 12Z"
                fill="currentColor"
              />
            </g>
          </svg>
          <Icon
            Svg={Vpp}
            className={cls.vpp}
          />
        </HStack>
      </VStack>

      {/* Pressure footer */}
      <HStack
        max
        justify="center"
        className={cls.pressure}
      >
        <Typography.Body level={3}>
          {formatPressure(pressure)}
        </Typography.Body>
      </HStack>
    </VStack>
  );
};

export { WeatherCardWidget };
