import React from 'react';
import cls from './WeatherCardWidget.module.scss';
import { VStack } from 'components/Stack';
import { Typography } from 'components/Typography';

const WeatherInfoSection = ({
  title,
  content,
  compact = false,
  theme = 'light',
  max,
}: {
  title: string
  content: React.ReactNode
  compact?: boolean
  theme?: 'light' | 'dark'
  max?: boolean
}) => (
  <VStack
    gap={compact
      ? 2
      : undefined}
    className={cls[`info-section--${theme}`]}
    max={max}
  >
    <Typography.Caption
      className={cls[`info-title--${theme}`]}
      style={{
        textWrap: 'wrap',
        wordBreak: 'break-all'
      }}
    >
      {title}
    </Typography.Caption>
    {content}
  </VStack>
);

export { WeatherInfoSection };
