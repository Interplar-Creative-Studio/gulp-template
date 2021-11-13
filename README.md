# gulp-template

Gulp-template это template для веб frontend html разработчиков
Тут используются следующие технологии:
- pug
- scss

### Начало
Для запуска:
Убедитесь в версии nodejs (`nodejs --version`). Шаблон сделан на версии 17

1. `npm i`
2. `npm update`
3. `gulp start`

### Структура проекта
```
app/
├── assets/
│   ├── fonts/ - Шрифты проекта
│   ├── img/ - Картинки .png .jpg .jpeg .svg .webp .gif
│   ├── static/ - статичные файлы из тега <head> (robot.txt, manifest.json)
│   ├─ styles/ - scss файлы*
│   └── main.scss
├── scripts/ - .js скрипты
└── views/ - Место обитания .pug файлов*

dist/ - Директория готового билда
tasks/ - Таски для gulp, если не знаете, что делаете - не лезьте!
gulpfile.js - Если не знаете, что делаете - не лезьте!
```

\* - Если нужны дополнительные директории - создавайте, не стесняйтесь.

## Команды Gulp

- `gulp start` - компилирование dev-версии и локальный сервер
- `gulp serve` - локальный сервер без компиляции

- `gulp compile:prod` - компилирование prod-версии
- `gulp compile:dev` - компилирование dev-версии


- `gulp pages` - компилирование .pug файлов

- `gulp styles:dev` - компилирование dev-версии .scss файлов
- `gulp styles:prod` - компилирование prod-версии .scss файлов

- `gulp imagemin` - сжатие картинок
- `gulp scripts` - .js файлы
- `gulp fonts` - шрифты
- `gulp static` - статик файлы (robot.txt, manifest.json)

- `gulp clean` - Очищаем директорию build

[comment]: <> (Gulp template is a template for web html developers!)

[comment]: <> (It includes)

[comment]: <> (1. pug)

[comment]: <> (2. scss)
