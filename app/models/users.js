'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	userName:{
		name:String
	},
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
	slack: {
		id: String,
		displayName: String,
		user: {
			image_1024:String,
			image_512:String,
			image_192:String,
			image_72:String,
			image_48:String,
			image_32:String,
			email:String,
			id:String,
			name:String
		}
	},
   nbrClicks: {
      clicks: Number
   },
	 hackPoints: {
      points: Number
   }
});

module.exports = mongoose.model('User', User);
