const { task, series } = require('gulp')

//* Стили
const scss2css = require('./tasks/scss2css')
const scss2css_prod = require('./tasks/scss2css_prod')

const clean = require('./tasks/clean')

//* Стили
task('styles:dev', series(scss2css))
task('styles:prod', series(scss2css_prod))