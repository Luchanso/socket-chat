'use strict';

let express = require('express'),
  winston = require('./winston'),
  app = express();

app.use(express.static('./public'));

module.exports = app;