'use strict';

let mongoose = require('../mongoose'),
  msgSchema = require('./msg-schema');

let Msg = mongoose.model('Msg', msgSchema);

Msg.getLastTen = () => {
  let count = 10;
  
  return Msg.find({}).sort({date: -1}).limit(count);
}

module.exports = Msg;