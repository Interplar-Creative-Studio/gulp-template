const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const prettyHtml = require('gulp-pretty-html');

module.exports = function pug2html() {
  return src('./app/views/pages/**/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(prettyHtml())
    .pipe(dest('./dist'))
}