# gulp-template

Gulp-template это template для веб frontend html разработчиков
Тут используются следующие технологии:
- pug
- scss
- bootstrap

###Структура проекта
> тут хз как сделать лучше архитектуру может у тебя будут предложения по улучшению тк например с папкой scripts у меня ступор
```
app - включает в себя все файлы с версткой 
├── assets/ - тут хранятся условно "статические" файлы. То есть все кроме html, js
│   ├── fonts/ - все шрифты проекта
│   ├── img/ - картинки .png .jpg .jpeg .svg .webp .gif
│   ├── static/ - статичные файлы из тега <head> (robot.txt, ico, sitemap) 
│   └── styles/ - scss файлы
│   │   ├── utils/
│   │   │   ├── _custom.scss - исправляем переменные bootstrap
│   │   │   ├── fonts.scss - подключаемы фонты
│   │   │   ├── libs.scss - подключаем библиотеки
│   │   │   ├── reset.scss - см. ссылку на пример ниже
│   │   │   └── ...
│   │   ├── css/ - скоспилированные файлы
│   │   ├── main.scss
│   │   └── ...
│   views/
│   ├── includes/
│   │   ├── modules/
│   │   └── ...
│   ├── layout/
│   ├── pages/
│   ├── utils/
│   │   ├── mixins.pug
│   │   └── ...
│   └── html/
└── scripts/
    ├── dist
    └── src
gulpfile.js/ 
├── index.js
└── ...
README.md
.gitignore
```
[Пример assets папки](https://github.com/Happyer29/webpack-bootstrap-pug-template/tree/master/src) 

[Много полезного что хотелось бы иметь у нас](https://css-tricks.com/gulp-for-beginners/)

[gulpfile.js](https://gulpjs.com/docs/en/getting-started/javascript-and-gulpfiles)
>Node's module resolution allows you to replace your gulpfile.js file with a directory named gulpfile.js that contains an index.js file which is treated as a gulpfile.js. This directory could then contain your individual modules for tasks. If you are using a transpiler, name the folder and file accordingly.


Нужна возможность быстрого отключения bootstrap

###Gulp watch
- `gulp watch` - смотрим за изменением всех файлов
- `gulp watch:html` - смотрим за изменением pug файлов
- `gulp watch:css` - смотрим за изменением scss файлов
- `gulp watch:pages` - смотрим за изменением html+css файлов
- `gulp watch:js` - смотрим за изменением js файлов

- `gulp compile:prod` - полностью компилируем проект
- `gulp compile:dev` - полностью компилируем проект под разработку (оставляем maps)
- `gulp useref` - комбинируем js файлы в один
- `gulp imagemin` - уменьшаем размер картинок (вот тут тоже вопрос к архитектуре, получается такая ситуация что каждый раз когда мы вводим эту команду, она относится ко всем картинкам. и например давние картинки будут оптимизироваться из раза в раз и из-за этого будут большие потери)

######(если придумаешь еще что-то полезное, буду рад)

- Для css нужен autoprefixer, для прода надо еще юзать uncss, csso, critical
- Babel желателен для js
- По поводу всех этих плагинов есть информация в статье которую кидал выше

[comment]: <> (Gulp template is a template for web html developers!)

[comment]: <> (It includes)

[comment]: <> (1. pug)

[comment]: <> (2. scss)

[comment]: <> (3. )