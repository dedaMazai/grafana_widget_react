/* eslint-disable react/display-name */
import React, {
  forwardRef, HTMLAttributes, PropsWithChildren,
} from 'react';
import { TypographyColorType } from '../Typography.types';
import cls from './Typography.module.scss';
import typographyCls from '../Typography.module.scss';
import { classNames } from 'helpers/classNames';

export type TypographyProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
  size?: 'medium' | 'small'
  weight?: 'normal' | 'bold'
  fontStyle?: 'normal' | 'italic'
  color?: TypographyColorType
  ellipsis?: boolean
};

const Typography = forwardRef<HTMLSpanElement, PropsWithChildren<TypographyProps>>(({
  children,
  className,
  size = 'medium',
  weight = 'normal',
  fontStyle = 'normal',
  color = 'primary',
  ellipsis,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={classNames(
        typographyCls.typography,
        cls.tableMono,
        cls[`_size-${size}`],
        cls[`_weight-${weight}`],
        cls[`_style-${fontStyle}`],
        typographyCls[`_color-${color}`],
        { [typographyCls._ellipsis]: ellipsis },
        className,
      )}
    >
      {children}
    </span>
  );
});

export { Typography };
