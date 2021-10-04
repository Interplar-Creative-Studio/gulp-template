const { watch, parallel } = require('gulp');

module.exports = function watching() {
	watch('app/assets/styles/*.+(scss|sass)', parallel('styles'));
};
