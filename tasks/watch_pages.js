const { watch, parallel } = require('gulp');

module.exports = function watching() {
	watch('app/views/**/*.pug', parallel('pug'));
	watch('app/assets/styles/**/*.scss', parallel('styles'));
};
