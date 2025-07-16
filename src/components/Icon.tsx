import React, {
  FC,
  memo, SVGProps,
} from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string
  Svg: FC<SVGProps<SVGSVGElement>>
  size?: 'large' | 'middle' | 'small' | 'xs'
}

// eslint-disable-next-line react/display-name
export const Icon = memo((props: IconProps) => {
  const {
    size = 'large',
    className,
    Svg,
    ...otherProps
  } = props;

  return (
    <Svg
      className={className}
      {...otherProps}
    />
  );
});
