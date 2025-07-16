import React from 'react';
import { ReactComponent as EyeOpenIcon } from '../assets/icons/eye-open.svg';
import Vpp from '../assets/icons/Vpp.svg';
import Compass from '../assets/icons/Compass.svg';
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
import { HStack, VStack } from 'components/Stack';
import { Divider } from 'components/Divider';
import { Typography } from 'components/Typography';
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
  windforce: number | null
  pressure: number
  theme: 'light' | 'dark'
  showTemperature: boolean
  showCloudCover: boolean
  showVisibility: boolean
  showSpecialPhenomena: boolean
  showWind: boolean
  showCompass: boolean
  showPressure: boolean
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
  windforce,
  pressure,
  theme,
  showTemperature,
  showCloudCover,
  showVisibility,
  showSpecialPhenomena,
  showWind,
  showCompass,
  showPressure,
}: WeatherCardWidgetProps) => {
  const weatherIconInfo = WEATHER_ICON_DATA[ceiling_icon_status];
  const hasWindGusts = windforce !== null;

  return (
    <VStack
      className={`${cls.card} ${cls[`card--${theme}`]}`}
    >
      <VStack
        gap={8}
        max
      >
        {showTemperature && (
          <HStack
            max
            justify="between"
          >
            <Typography.Body size="small" className={cls.location}>Температура</Typography.Body>
            <Typography.Body className={cls.temperature}>
              {formatTemperature(temperature)}
            </Typography.Body>
          </HStack>
        )}

        {showCloudCover && (
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
                      size="small"
                    >
                      {weatherIconInfo.title}
                    </Typography.Body>
                  </HStack>
                )
                : <Typography.Body size="small">---</Typography.Body>
            }
            theme={theme}
          />
        )}

        {showVisibility && (
          <WeatherInfoSection
            title="Видимость"
            content={(
              <HStack gap={4}>
                <EyeOpenIcon
                  width={16}
                  height={16}
                  color={colorEyeRegardingVisibleHandler(visibility)}
                />
                <Typography.Body size="small">
                  {formatVisibility(visibility)}
                </Typography.Body>
                <Typography.Body
                  title={ceiling}
                  size="small"
                >
                  {ceiling}
                </Typography.Body>
              </HStack>
            )}
            theme={theme}
          />
        )}

        {showSpecialPhenomena && (
          <WeatherInfoSection
            title="Особые явления"
            content={(
              <HStack gap={4}>
                {icon_code && <HStack>{specialEventIconHandler(icon_code)}</HStack>}
                <Typography.Body size="small">
                  {weather || 'Отсутствуют'}
                </Typography.Body>
              </HStack>
            )}
            theme={theme}
            max
          />
        )}

        {showWind && (
          <HStack
            max
            justify="between"
          >
            <WeatherInfoSection
              title="Ветер"
              content={(
                <HStack gap={2}>
                  {windIcon(windintens, windforce, theme)}
                  <Typography.Body size="small">{`${winddir}°`}</Typography.Body>
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
                <Typography.Body size="small">
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
                <Typography.Body size="small">
                  {hasWindGusts
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    ? formatWindSpeed(windforce!)
                    : '---'}
                </Typography.Body>
              )}
              compact
              theme={theme}
            />
          </HStack>
        )}

        {showCompass && (
          <HStack
            max
            justify="center"
            className={cls.compass}
          >
            <img src={Compass} style={{ position: 'absolute' }} />
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
            <img src={Vpp} className={cls.vpp} style={{ position: 'absolute' }} />
          </HStack>
        )}
      </VStack>

      {showPressure && (
            <HStack
              max
              justify="center"
              className={cls.pressure}
            >
              <Typography.Body size="small">
                {formatPressure(pressure)}
              </Typography.Body>
            </HStack>
      )}
    </VStack>
  );
};

export { WeatherCardWidget };
