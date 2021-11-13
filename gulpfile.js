const { task, series } = require('gulp')

const scss2css = require('./tasks/scss2css')
const scss2css_prod = require('./tasks/scss2css_prod')
const pug2html = require('./tasks/pug2html')
const images = require('./tasks/images')
const scripts = require('./tasks/scripts')
const fonts = require('./tasks/fonts')
const static = require('./tasks/static')
const serve = require('./tasks/serve')

const clean = require('./tasks/clean')

let dev = series(pug2html, scss2css, scripts, fonts, static, images)
let prod = series(pug2html, scss2css_prod, scripts, fonts, static, images)

task('styles:dev', series(scss2css))
task('styles:prod', series(scss2css_prod))

task('pages', series(pug2html))
task('imagemin', series(images))
task('scripts', series(scripts))
task('fonts', series(fonts))
task('static', series(static))

task('compile:dev', dev)
task('compile:prod', prod)

task('serve', series(serve))

task('start', series(dev, serve))