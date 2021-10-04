const { watch, parallel } = require('gulp');

module.exports = function watching() {
	watch('app/views/html/**/*.html', parallel('pug'));
	watch('app/assets/styles/*.+(scss|sass)', parallel('styles'));
};
