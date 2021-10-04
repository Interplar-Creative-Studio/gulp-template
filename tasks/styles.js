const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function styles() {
	return src(['app/assets/styles/**/*.scss', '!app/assets/styles/css/'])
		.pipe(map.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(
			prefixer({
				overrideBrowserslist: ['last 8 versions'],
				browsers: [
					'Android >= 4',
					'Chrome >= 20',
					'Firefox >= 24',
					'Explorer >= 11',
					'iOS >= 6',
					'Opera >= 12',
					'Safari >= 6',
				],
			}),
		)
		.pipe(concat('styles.min.css'))
		.pipe(map.write('/sourcemaps/'))
		.pipe(dest('./build/assets/css'))
		.pipe(bs.stream());
};
