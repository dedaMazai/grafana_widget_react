import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addBooleanSwitch({
      path: 'showTemperature',
      name: 'Температура',
      description: 'Отображать информацию о температуре',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showCloudCover',
      name: 'Облачность',
      description: 'Отображать информацию о облачности',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showVisibility',
      name: 'Видимость',
      description: 'Отображать информацию о видимости',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showSpecialPhenomena',
      name: 'Особые явления',
      description: 'Отображать информацию о особых явлениях',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showWind',
      name: 'Ветер',
      description: 'Отображать информацию о ветре',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showCompass',
      name: 'Компас',
      description: 'Отображать компас',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showPressure',
      name: 'Давление',
      description: 'Отображать информацию о давление',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'onLightTheme',
      name: 'Светлая тема',
      description: 'Включить светлую тему',
      defaultValue: true,
    })
});
