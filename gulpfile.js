const { gulp, parallel, series } = require('gulp');
const requireDir = require('require-dir');

const tasks = requireDir('./tasks');

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
//* Слежка
exports.watch = tasks.watch;
exports.watch_html = tasks.watch_html;
exports.watch_styles = tasks.watch_styles;
exports.watch_pages = tasks.watch_pages;
exports.watch_scripts = tasks.watch_scripts;

//* Компиляция в прод
exports.compile_prod = series(
	exports.pug,
	exports.styles_prod,
	exports.libs_styles,
	exports.scripts,
	exports.libs_scripts,
);

//TODO Компиляция для разработки
exports.compile_dev = parallel(
	exports.pug,
	exports.styles,
	exports.libs_styles,
	exports.scripts,
	exports.libs_scripts,
);

//* JS файлы в один (по факту два - 1 для библиотек)
exports.useref = parallel(exports.dev_scripts, exports.libs_scripts);
