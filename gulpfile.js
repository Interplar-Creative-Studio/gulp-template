const { task, series } = require('gulp')

//* Стили
const scss2css = require('./tasks/scss2css')
const scss2css_prod = require('./tasks/scss2css_prod')

//* Страницы
const pug2html = require('./tasks/pug2html')

const clean = require('./tasks/clean')

//* Стили
task('styles:dev', series(scss2css))
task('styles:prod', series(scss2css_prod))

//* Страницы
task('pages', series(pug2html))