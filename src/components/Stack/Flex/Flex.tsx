import React, { ReactNode } from 'react';
import { classNames } from '../../../helpers/classNames';
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
} from './const';
import {
  DivProps,
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
} from './types';
import cls from './Flex.module.scss';

export interface FlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
  maxHeight?: boolean
  wrap?: boolean
  reverse?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    maxHeight,
    wrap,
    reverse,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods = {
    [cls.max]: !!max,
    [cls.maxHeight]: !!maxHeight,
    [cls.wrap]: !!wrap,
    [cls.reverse]: !!reverse,
  };

  return (
    <div
      {...otherProps}
      className={classNames(cls.Flex, mods, classes)}
    >
      {children}
    </div>
  );
};
