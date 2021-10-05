const { task, series, parallel } = require('gulp');

const pug2html = require('./tasks/pug2html');
const scss2css = require('./tasks/scss2css');
const scripts = require('./tasks/scripts');
const images = require('./tasks/images');
const clean = require('./tasks/clean');
const serve = require('./tasks/serve');
const fonts = require('./tasks/fonts');

const dev = series(pug2html, scss2css, scripts, fonts, images);

const build = series(clean, dev);

module.exports.start = series(build, serve);
module.exports.dev = dev;
module.exports.build = build;
