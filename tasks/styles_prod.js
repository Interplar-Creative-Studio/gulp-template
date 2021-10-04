const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const bs = require('browser-sync');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const uncss = require('postcss-uncss');
const criticalCss = require('gulp-critical-css');
const csso = require('gulp-csso');

module.exports = function styles_prod() {
	var plugins = [
		autoprefixer({
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
		uncss({
			html: './build/**/*.html',
		}),
	];

	return src(['app/assets/styles/**/*.+(scss|sass)', '!app/assets/styles/css/'])
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(criticalCss())
		.pipe(concat('styles.min.css'))
		.pipe(postcss(plugins))
		.pipe(
			csso({
				restructure: false,
				sourceMap: false,
				debug: false,
			}),
		)
		.pipe(dest('./build/assets/css'))
		.pipe(bs.stream());
};
