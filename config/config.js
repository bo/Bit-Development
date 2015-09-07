var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'production';

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'bitdev'
		},
		port: 8080,
		db: 'mongodb://localhost/bitdev-development',
		email: {
			receipant: "info@bitdev.nl",
			service: 'gmail',
			auth: {
				user: "bitdevelopmentnl@gmail.com",
				pass: "secret",
			}
		}
	},

	production: {
		root: rootPath,
		app: {
			name: 'bitdev'
		},
		port: 8080,
		db: 'mongodb://localhost/bitdev-live',
		email: {
			receipant: "bob@bitdev.nl",
			service: 'gmail',
			auth: {
				user: "bitdevelopmentnl@gmail.com",
				pass: "secret",
			}
		}
	}
};

module.exports = config[env];
