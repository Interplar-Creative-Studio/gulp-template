const { watch, parallel } = require('gulp');

module.exports = function watching() {
	watch('app/scripts/src/**/*.js', parallel('dev_scripts'));
};
