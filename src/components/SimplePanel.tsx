import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions} from 'types';
import { PanelDataErrorView } from '@grafana/runtime';
import { WeatherCardWidget } from './WeatherCardWidget';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  const {
    showCloudCover,
    showVisibility,
    showSpecialPhenomena,
    showTemperature,
    showWind,
    showCompass,
    showPressure,
    onLightTheme,
  } = options;

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }
  // const mainData = data.series[0].fields.reduce<any>((acc, {type, name, values}) => {
  //   return({
  //     ...acc,
  //     [name]: {
  //     type,
  //     value: values[values.length - 1],
  //     }
  //   })
  // }, {})
  const mainData = data.series[0].fields.reduce<any>((acc, {type, name, values}) => {
    return({
      ...acc,
      [name]: values[values.length - 1]
    })
  }, {})

  const {
    weather,
    ceiling,
    visibility,
    temperature,
    pressure,
    windintens,
    windforce,
    winddir,
    ceiling_icon_status,
    icon_code,
  } = mainData;

  return (
    <div
      style={{
        width,
        height,
        overflow: 'auto',
      }}
    >
      <WeatherCardWidget
        weather={weather} // Особые явления
        ceiling={ceiling} // Видимость код
        visibility={visibility} // Видимость метры
        temperature={temperature} // Температура воздуха
        pressure={pressure} // Давление
        windintens={windintens} // Скорость ветра
        windforce={windforce} // Порывы ветра
        winddir={winddir} // Направление ветра
        ceiling_icon_status={ceiling_icon_status} // Код облачности 'SKC' | 'STS' | 'NSC' | 'FEW' | 'SCT' | 'BKN' | 'OVC' | 'CB' | 'TCU' | 'ACC';=
        icon_code={icon_code} // Код иконки особого явления '-SN' | '-GS' | 'SN'| 'GS' | '+SN'| '+GS' | '-RA' | '-GR' | 'RA'| 'GR'| '+RA' | '+GR' | '-BR'| '-FG'| '-FU' | 'BR'| 'FG'| 'FU'| '+BR'| '+FG'| '+FU'

        theme={onLightTheme ? 'light' : 'dark'}
        showTemperature={showTemperature}
        showCloudCover={showCloudCover}
        showVisibility={showVisibility}
        showSpecialPhenomena={showSpecialPhenomena}
        showWind={showWind}
        showCompass={showCompass}
        showPressure={showPressure}
      />
    </div>
  );
};
