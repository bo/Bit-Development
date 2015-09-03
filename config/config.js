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
			receipant: "myemail@gmail.com",
			service: 'Gmail',
			auth: {
				user: "myemail@gmail.com",
				pass: "MyPass123",
			}
		}
	},

	production: {
		root: rootPath,
		app: {
			name: 'bitdev'
		},
		port: 3000,
		db: 'mongodb://localhost/bitdev-live',
		email: {
			receipant: "myemail@gmail.com",
			service: 'Gmail',
			auth: {
				user: "myemail@gmail.com",
				pass: "MyPass123",
			}
		}
	}
};

module.exports = config[env];
