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

---

## Структура проекта

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

---

## Команды Gulp

`gulp start` - компилирование dev-версии и локальный сервер

`gulp serve` - локальный сервер без компиляции

`gulp compile:prod` - компилирование prod-версии

`gulp compile:dev` - компилирование dev-версии

`gulp pages` - компилирование .pug файлов

`gulp styles:dev` - компилирование dev-версии .scss файлов

`gulp styles:prod` - компилирование prod-версии .scss файлов

`gulp imagemin` - сжатие картинок

`gulp scripts` - .js файлы

`gulp fonts` - шрифты

`gulp static` - статик файлы (robot.txt, manifest.json)

`gulp clean` - Очищаем директорию build

---

<div style="display:flex;">
<a href="https://vk.com/interplar_cs" style="margin-right: 20px" title="VK">
<img src="https://sun9-63.userapi.com/impg/7gEk1SPzAOCHn_8J7Y8jP-bhSLGbqqMNfqAicQ/zk8hCyat5ck.jpg?size=512x512&quality=95&sign=9969fa4b14993298851de34feb3d3446&type=album" data-canonical-src="https://vk.com/interplar_cs" width="100" style="border-radius:100%"/>
</a>

<a href="https://www.behance.net/interplar" title="Behance">
<img src="https://mir-s3-cdn-cf.behance.net/user/115/1d165a1021032749.60f3f0d64537d.png" data-canonical-src="https://www.behance.net/interplar" width="100" style="border-radius:100%"/>
</a>
</div>

---

## Успехов в разработке!

[comment]: <> (Gulp template is a template for web html developers!)

[comment]: <> (It includes)

[comment]: <> (1. pug)

[comment]: <> (2. scss)
