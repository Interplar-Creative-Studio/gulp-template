const { watch, series, src } = require('gulp');

const images = require('./images');
const scss2css = require('./scss2css');
const pug2html = require('./pug2html');
const scripts = require('./scripts');

const server = require('browser-sync').create();

function readyReload(cb) {
	server.reload();
	cb();
}

module.exports = function serve(cb) {
	server.init({
		server: 'build',
		notify: false,
		open: true,
		cors: true,
	});

	watch('app/assets/img/*.{gif,png,jpg,svg,webp}', series(images, readyReload));
	watch(
		'app/assets/styles/**/*.scss',
		series(scss2css, (cb) => src('build/assets/css').pipe(server.stream()).on('end', cb)),
	);
	watch('app/scripts/**/*.js', series(scripts, readyReload));
	watch('app/views/pages/**/*.pug', series(pug2html, readyReload));

	return cb();
};
