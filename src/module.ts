import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addBooleanSwitch({
      path: 'showWindData',
      name: 'Показывать данные о ветре',
      description: 'Отображать информацию о направлении и скорости ветра',
      defaultValue: true,
    })
    .addBooleanSwitch({
      path: 'showFlights',
      name: 'Показывать рейсы',
      description: 'Отображать список рейсов',
      defaultValue: true,
    })
    .addNumberInput({
      path: 'windUpdateInterval',
      name: 'Интервал обновления данных о ветре (сек)',
      description: 'Как часто обновлять данные о ветре',
      defaultValue: 60,
      settings: {
        min: 10,
        max: 3600,
      },
    })
    .addNumberInput({
      path: 'flightsUpdateInterval',
      name: 'Интервал обновления данных о рейсах (сек)',
      description: 'Как часто обновлять данные о рейсах',
      defaultValue: 30,
      settings: {
        min: 10,
        max: 3600,
      },
    });
});
