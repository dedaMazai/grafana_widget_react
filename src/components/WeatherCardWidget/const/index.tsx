import React from 'react';
import { ReactComponent as Cloud01Icon } from '../assets/icons/cloud-01.svg';
import { ReactComponent as Cloud03Icon } from '../assets/icons/cloud-03.svg';
import { ReactComponent as CloudRainIcon } from '../assets/icons/cloud-rain.svg';
import { ReactComponent as CloudSunIcon } from '../assets/icons/cloud-sun.svg';
import { ReactComponent as MistyCloudIcon } from '../assets/icons/misty-cloud.svg';
import { ReactComponent as Sun02Icon } from '../assets/icons/sun-02.svg';
import { ReactComponent as TwinCloudIcon } from '../assets/icons/twin-cloud.svg';

export const WEATHER_ICON_DATA = {
  SKC: {
    icon: <Sun02Icon
      width={16}
      height={16}
    />,
    title: 'Ясно',
  }, // "Ясно",
  STS: {
    icon: <CloudSunIcon
      width={16}
      height={16}
    />,
    title: 'Отдельные облака',
  }, // "Отдельные облака"
  NSC: {
    icon: <CloudSunIcon
      width={16}
      height={16}
    />,
    title: 'Не существеннная',
  }, // "Не существеннная"
  FEW: {
    icon: <CloudSunIcon
      width={16}
      height={16}
    />,
    title: 'Незначительная, рассеянная',
  }, // "Незначительная, рассеянная"
  SCT: {
    icon: <CloudSunIcon
      width={16}
      height={16}
    />,
    title: 'Отдельная, разбросанная',
  }, // Отдельная, разбросанная
  BKN: {
    icon: <TwinCloudIcon
      width={16}
      height={16}
    />,
    title: 'Значительная разорванная',
  }, // Значительная разорванная
  OVC: {
    icon: <Cloud01Icon
      width={16}
      height={16}
    />,
    title: 'Сплошная',
  }, // Сплошная
  CB: {
    icon: <CloudRainIcon
      width={16}
      height={16}
    />,
    title: 'Кучево-дождевая',
  }, // Кучево-дождевая
  TCU: {
    icon: <MistyCloudIcon
      width={16}
      height={16}
    />,
    title: 'Мощнокучевобашенные',
  }, // "Мощнокучевобашенные
  ACC: {
    icon: <Cloud03Icon
      width={16}
      height={16}
    />,
    title: 'Высоко-кучевые башенковидные',
  }, // "Высоко-кучевые башенковидные
};
