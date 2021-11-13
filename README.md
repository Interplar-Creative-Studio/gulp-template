# gulp-template

Gulp-template это template для веб frontend html разработчиков
Тут используются следующие технологии:
- pug
- scss

### Начало
Для запуска:
Убедитесь в версии nodejs (`nodejs --version`). Шаблон сделать на версии 17

1. `npm i`
2. `npm update`
3. `gulp start`

### Структура проекта
```
app/ - включает в себя все файлы с версткой
├── assets/ - тут хранятся условно "статические" файлы. То есть все кроме html, js
│   ├── fonts/ - все шрифты проекта
│   ├── img/ - картинки .png .jpg .jpeg .svg .webp .gif
│   ├── static/ - статичные файлы из тега <head> (robot.txt, ico, sitemap)
│   └── styles/ - scss файлы
│       └── utils/
│   │       ├── _custom.scss - исправляем переменные bootstrap
│   │       ├── fonts.scss - подключаем шрифты
│   │       ├── libs.scss - подключаем библиотеки
│   │       ├── reset.scss - см. ссылку на пример ниже
│   │       └── ...
│   └── main.scss
├── scripts/ - Директория скриптов
└── views/ - Место обитания PUG файлов
    ├── includes/
    │   └── modules/
    ├── layouts/
    ├── pages/
    └── utils/
dist/ - Директория готового билда
tasks
gulpfile.js
```

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
