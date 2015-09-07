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

router.post('/', function(req, res, next) {
	var Trans, body;

	var required = ['name', 'email', 'message'];
	for (var i = 0; i < required.length; i++) {
		if (!req.body[required[i]]) {
			req.flash('error', 'Gelieve alle velden invullen');
			return res.redirect('back');
		}
	}

	Trans = nodemailer.createTransport(smtpTrans(config.email));

	body = "Naam: " + req.body.name + "\r\n";
	body += "Email: " + req.body.email + "\r\n";
	body += "Bericht: \r\n";
	body += req.body.message;

	Trans.sendMail({
		from: req.body.name + " &gt;" + req.body.email + "&lt;",
		to: config.email.receipant,
		subject: 'Je heb mail van bitdev, ' + req.body.name,
		text: body,
	}, function(err, info) {
		if (err) {
			console.error(err);
			req.flash('error', 'Error probeer later opnieuw');
		} else {
			req.flash('success', 'Bericht is verstuurd');
		}
		res.redirect('back');
	});
});
