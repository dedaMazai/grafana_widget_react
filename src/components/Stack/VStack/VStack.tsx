/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import {
  Flex, FlexProps,
} from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>; // Omit исключает поле из типа

export const VStack = forwardRef<HTMLDivElement, VStackProps>((props, ref) => {
  const { align = 'start' } = props;

  return (
    <Flex
      ref={ref}
      align={align}
      direction="column"
      {...props}
    />
  );
});
