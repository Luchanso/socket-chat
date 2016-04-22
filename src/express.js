'use strict';

let express = require('express'),
  winston = require('./winston'),
  app = express();

const port = process.env.PORT || 80;

app.use(express.static('./public'));

app.listen(port, () => {
  winston.info(`App run on 0.0.0.0:${port}`);
});

module.exports = express;