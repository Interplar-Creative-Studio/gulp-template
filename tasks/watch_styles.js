const { watch, parallel } = require('gulp');

module.exports = function watchingStyles() {
	watch('app/assets/styles/**/*.scss', parallel('styles'));
};
