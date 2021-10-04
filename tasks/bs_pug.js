const bs = require('browser-sync');

module.exports = function bs_pug() {
	bs.init({
		server: {
			baseDir: './build',
			host: 'localhost',
		},
		logPrefix: 'BrowserSync:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true,
	});
};
