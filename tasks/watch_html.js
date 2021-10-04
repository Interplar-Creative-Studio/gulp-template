const { watch, parallel, series } = require('gulp');

module.exports = function watchingHTML() {
	watch('app/views/html/**/*.html', parallel('pug'));
};
