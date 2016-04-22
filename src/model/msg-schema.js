'use strict';

let mongoose = require('../mongoose');

let msgSchema = mongoose.Schema({
  nickname: String,
  msg: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = msgSchema;