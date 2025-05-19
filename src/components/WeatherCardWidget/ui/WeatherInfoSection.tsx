import React from 'react';
import {
  Typography, VStack,
} from '@krap/common';
import cls from './WeatherCardWidget.module.scss';

const WeatherInfoSection = ({
  title,
  content,
  compact = false,
  theme = 'light',
}: {
  title: string
  content: React.ReactNode
  compact?: boolean
  theme?: 'light' | 'dark'
}) => (
  <VStack
    gap={compact
      ? 2
      : undefined}
    className={cls[`info-section--${theme}`]}
  >
    <Typography.Caption
      level={3}
      className={cls[`info-title--${theme}`]}
    >
      {title}
    </Typography.Caption>
    {content}
  </VStack>
);

export { WeatherInfoSection };
