## Запуск проекта

```
npm install - устанавливаем зависимости
npm run dev - сборка билда виджета в development режиме
npm run server - запуск grafana в docker


npm run build - сборка билда виджета в production режиме
```

## Переменные

- `weather` - Особые явления
- `ceiling` - Видимость код
- `visibility` - Видимость метры
- `temperature` - Температура воздуха
- `pressure` - Давление
- `windintens` - Скорость ветра
- `windforce` - Порывы ветра
- `winddir` - Направление ветра
- `ceiling_icon_status` - Код облачности 'SKC' | 'STS' | 'NSC' | 'FEW' | 'SCT' | 'BKN' | 'OVC' | 'CB' | 'TCU' | 'ACC';
- `icon_code` - Код иконки особого явления '-SN' | '-GS' | 'SN'| 'GS' | '+SN'| '+GS' | '-RA' | '-GR' | 'RA'| 'GR'| '+RA' | '+GR' | '-BR'| '-FG'| '-FU' | 'BR'| 'FG'| 'FU'| '+BR'| '+FG'| '+FU'

## Описание

   - После выполнения команды `npm run build`, создается папка dist в корне проекта
   - Прокинуть содержимое папки dist в контейнер с графаной в папку /var/lib/grafana/plugins/svo-airportwidget-panel

   P.S. Для более подробного ознакомления запуска графаны с виджетом: [docker-compose-base](.config/docker-compose-base.yaml), [Dockerfile](.config/Dockerfile)