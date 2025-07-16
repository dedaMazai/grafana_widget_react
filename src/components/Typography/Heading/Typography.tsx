/* eslint-disable react/display-name */
import React, {
  forwardRef,
  HTMLAttributes, PropsWithChildren,
} from 'react';
import { TypographyColorType } from '../Typography.types';
import cls from './Typography.module.scss';
import typographyCls from '../Typography.module.scss';
import { classNames } from 'helpers/classNames';

export type TypographyProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'color'> & {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: TypographyColorType
  ellipsis?: boolean
};

const Typography = forwardRef<HTMLHeadingElement, PropsWithChildren<TypographyProps>>(({
  level = 2,
  color = 'primary',
  ellipsis,
  children,
  className,
  ...props
}, ref) => {
  const Heading = `h${level > 5
    ? 5
    : level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

  return (
    <Heading
      ref={ref}
      className={classNames(typographyCls.typography, cls.heading, cls[`_level-${level}`], typographyCls[`_color-${color}`], { [typographyCls._ellipsis]: ellipsis }, className)}
      {...props}
    >
      {children}
    </Heading>
  );
});

export { Typography };
