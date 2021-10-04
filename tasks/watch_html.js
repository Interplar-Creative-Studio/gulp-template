const { watch, parallel } = require('gulp');

module.exports = function watchingHTML() {
	watch('app/views/**/*.pug', parallel('pug'));
};
