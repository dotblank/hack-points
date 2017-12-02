'use strict';

var User = require('../models/users');
var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var clickHandler = new ClickHandler();

	app.route('/')
	.get(isLoggedIn, function (req, res) {
		res.sendFile(path + '/public/index.html');
	});


	app.route('/login')
	.get(function (req, res) {
		res.sendFile(path + '/public/login.html');
	});

	app.route('/logout')
	.get(function (req, res) {
		req.logout();
		res.redirect('/login');
	});

	app.route('/profile')
	.get(isLoggedIn, function (req, res) {
		res.redirect('/')
		// res.sendFile(path + '/public/profile.html');
	});
	
	app.route('/new-bounty')
	.get(isLoggedIn, function (req, res) {
		res.redirect('/')
		// res.sendFile(path + '/public/profile.html');
	});
	

	app.route('/api/user/points/')
	.get(isLoggedIn, function (req, res) {
		res.json(req.user.hackPoints);
	});

	app.route('/api/')
	.get(isLoggedIn, function (req, res) {
		// console.log(Users.find())
		res.json(req.user);
	});


	app.route('/api/user/')
	.get(isLoggedIn, function (req, res) {
		res.json(req.user.slack.user);
	});

	app.route('/auth/github')
	.get(passport.authenticate('github'));

	app.route('/auth/slack')
	.get(passport.authenticate('slack'));

	app.route('/auth/github/callback')
	.get(passport.authenticate('github', {
		successRedirect: '/',
		failureRedirect: '/login'
	}));

	app.route('/auth/slack/callback')
	.get(passport.authenticate('slack', {
		successRedirect: '/',
		failureRedirect: '/login'
	}));

// 	app.route('/api/:id/clicks')
// 	.get(isLoggedIn, clickHandler.getClicks)
// 	.post(isLoggedIn, clickHandler.addClick)
// 	.delete(isLoggedIn, clickHandler.resetClicks);
};
