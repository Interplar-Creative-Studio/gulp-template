const { src, dest } = require('gulp');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = function scripts() {
	return src(['app/scripts/src/**/*.js'])
		.pipe(uglify())
		.pipe(
			babel({
				presets: ['@babel/env'],
			}),
		)
		.pipe(concat('bundle.min.js'))
		.pipe(dest('app/scripts/dist/'));
};
