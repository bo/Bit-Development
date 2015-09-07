var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'bitdev'
		},
		port: 8080,
		db: 'mongodb://localhost/bitdev-development',
		email: {
			receipant: "bob@bitdev.nl",
			service: 'email',
			auth: {
				user: "bob@bitdev.nl",
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
			service: 'email',
			auth: {
				user: "bob@bitdev.nl",
				pass: "secret",
			}
		}
	}
};

module.exports = config[env];
