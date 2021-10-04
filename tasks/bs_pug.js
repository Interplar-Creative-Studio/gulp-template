const bs = require('browser-sync');

module.exports = function bs_pug() {
	bs.init({
		server: {
			baseDir: 'build/',
			host: 'localhost',
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware('*', function (req, res) {
					res.writeHead(302, {
						location: '404.html',
					});
					res.end('Redirecting!');
				});
			},
		},
		logPrefix: 'BS-PUG:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true,
	});
};
