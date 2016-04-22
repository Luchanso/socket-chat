'use strict';

let mongoose = require('mongoose');

const path = process.env.MONGO_URL || 'mongodb://localhost/test';

mongoose.connect(path);

module.exports = mongoose;