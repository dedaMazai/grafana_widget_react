import React from 'react';
import cls from './Divider.module.scss';
import { classNames } from 'helpers/classNames';

export interface DividerProps {
  className?: string
  position?: 'horizontal' | 'vertical'
  size?: number | string
  style?: React.CSSProperties
}

export const Divider = (props: DividerProps) => {
  const {
    className,
    position = 'horizontal',
    size,
    style,
  } = props;

  const innerStyle: React.CSSProperties = {
    ...style,
    [position === 'vertical'
      ? 'height'
      : 'width']: size,
  };

  return (
    <div
      style={innerStyle}
      className={classNames(cls[position], className)}
    />
  );
};
