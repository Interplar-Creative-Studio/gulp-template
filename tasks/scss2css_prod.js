const { src, dest } = require('gulp');

const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

module.exports = function scss2css() {
  return src('./app/assets/styles/*')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(concat('styles.min.css'))
    .pipe(dest('./dist/assets/css'))
}