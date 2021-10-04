const { src, dest } = require('gulp');

module.exports = function staticServe() {
	return src('app/assets/static/**/*').pipe(dest('./build'));
};
