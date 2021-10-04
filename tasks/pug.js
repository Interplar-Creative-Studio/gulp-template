const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const bs = require('browser-sync');

module.exports = function compile_pug() {
	return src('app/views/pages/*.pug')
		.pipe(pug({ pretty: false }))
		.pipe(dest('./build'))
		.pipe(bs.stream());
};
