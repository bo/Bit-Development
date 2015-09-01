var express = require('express'),
	router = express.Router(),
	nodemailer = require('nodemailer'),
	smtpTrans = require('nodemailer-smtp-transport'),
	config = require('../../config/config.js');

module.exports = function(app) {
	app.use('/', router);
};

router.get('/', function(req, res, next) {
	res.render('layouts/home', {
		title: 'Home',
	});
});

router.get('/contact', function(req, res, next) {
	res.render('layouts/contact', {
		title: 'Contact',
		error: req.flash('error'),
		success: req.flash('success'),
	});
});

router.post('/contact', function(req, res, next) {
	var Trans, body;

	var required = ['email', 'name', 'message'];
	for (var i = 0; i < required.length; i++) {
		if (!req.body[required[i]]) {
			req.flash('error', 'Please complete all required fields');
			return res.redirect('back');
		}
	}

	Trans = nodemailer.createTransport(smtpTrans(config.email));

	body = "Name: " + req.body.name + "\r\n";
	body += "Email: " + req.body.email + "\r\n";
	body += "Message: \r\n";
	body += req.body.message;

	Trans.sendMail({
		from: req.body.name + " &gt;" + req.body.email + "&lt;",
		to: config.email.receipant,
		subject: 'You got a mail from ' + req.body.name,
		text: body,
	}, function(err, info) {
		if (err) {
			console.error(err);
			req.flash('error', 'Error try again later.');
		} else {
			req.flash('success', 'Message Send.');
		}
		res.redirect('back');
	});
});
