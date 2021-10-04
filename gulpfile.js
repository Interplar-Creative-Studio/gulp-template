const { task, parallel, series } = require('gulp');
const requireDir = require('require-dir');

const tasks = requireDir('./tasks');

exports.staticServe = tasks.prod;
exports.fonts = tasks.fonts;

//* Файлы PUG (JADE)
exports.pug = tasks.pug;
exports.bs_pug = tasks.bs_pug;

//* Файлы стилей (SASS, SCSS)
exports.styles = tasks.styles;
exports.styles_prod = tasks.styles_prod;
exports.libs_styles = tasks.libs_styles;

//* Файлы JavaScript
exports.scripts = tasks.scripts;
exports.dev_scripts = tasks.dev_scripts;
exports.libs_scripts = tasks.libs_scripts;

//* Gulp команды
//* Картинки
exports.imagemin = tasks.images_rastr;

//* Компиляция в прод
// task('compile:prod', async function (done) {
// 	return (
// 		exports.pug,
// 		exports.styles_prod,
// 		exports.libs_styles,
// 		exports.scripts,
// 		exports.libs_scripts,
// 		exports.imagemin,
// 		exports.staticServe
// 	);
// });
exports.compile_prod = series(
	exports.pug,
	exports.styles_prod,
	exports.libs_styles,
	exports.scripts,
	exports.libs_scripts,
	exports.imagemin,
	exports.staticServe,
	exports.fonts,
);

//TODO Компиляция для разработки
// task('compile:dev', async function () {
// 	return (
// 		exports.pug,
// 		exports.styles,
// 		exports.libs_styles,
// 		exports.scripts,
// 		exports.libs_scripts,
// 		exports.imagemin,
// 		exports.staticServe,
// 		exports.fonts
// 	);
// });
exports.compile_dev = parallel(
	exports.pug,
	exports.styles,
	exports.libs_styles,
	exports.dev_scripts,
	exports.libs_scripts,
	exports.imagemin,
	exports.staticServe,
	exports.fonts,
);

//* JS файлы в один (по факту два - 1 для библиотек)
exports.useref = parallel(exports.dev_scripts, exports.libs_scripts);

//* Слежка
task('watch', series(exports.compile_dev, tasks.bs_pug, tasks.watch))
task('watch:html', series([exports.compile_dev, tasks.bs_pug, tasks.watch_html]));
task('watch:css', series([exports.compile_dev, tasks.bs_pug, tasks.watch_styles]));
task('watch:pages', series([exports.compile_dev, tasks.bs_pug, tasks.watch_pages]));
task('watch:js', parallel([exports.compile_dev, tasks.watch_scripts, tasks.bs_pug]));