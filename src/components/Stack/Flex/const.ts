import {
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
} from './types';
import cls from './Flex.module.scss';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  around: cls.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  stretch: cls.alignStretch,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionsRow,
  column: cls.directionsColumn,
};

const gapClasses: Record<FlexGap, string> = {
  2: cls.gap2,
  4: cls.gap4,
  6: cls.gap6,
  8: cls.gap8,
  10: cls.gap10,
  12: cls.gap12,
  14: cls.gap14,
  16: cls.gap16,
  18: cls.gap18,
  20: cls.gap20,
  22: cls.gap4,
  24: cls.gap24,
  32: cls.gap32,
  64: cls.gap64,
};

export {
  justifyClasses, alignClasses, directionClasses, gapClasses,
};
