'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bounty = new Schema({
  title:String,
  message:String,
  isComplete:Boolean,
  isApproved:Boolean,
  completedBy:String,
  pointValue:Number

});

module.exports = mongoose.model('Bounty', Bounty);

