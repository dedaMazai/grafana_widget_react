/* eslint-disable react/display-name */
import React, {
  forwardRef,
  HTMLAttributes, PropsWithChildren,
} from 'react';
import { TypographyColorType } from '../Typography.types';
import cls from './Typography.module.scss';
import typographyCls from '../Typography.module.scss';
import { classNames } from 'helpers/classNames';

export type TypographyProps = Omit<HTMLAttributes<HTMLSpanElement>, 'color'> & {
  size?: 'large' | 'medium'
  color?: TypographyColorType
  ellipsis?: boolean
};

const Typography = forwardRef<HTMLSpanElement, PropsWithChildren<TypographyProps>>(({
  size = 'medium',
  color = 'primary',
  ellipsis,
  children,
  className,
  ...props
}, ref) => {
  return (
    <span
      ref={ref}
      {...props}
      className={classNames(typographyCls.typography, cls.display, cls[`_size-${size}`], typographyCls[`_color-${color}`], { [typographyCls._ellipsis]: ellipsis }, className)}
    >
      {children}
    </span>
  );
});

export { Typography };
