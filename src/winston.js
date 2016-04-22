'use strict';

let winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  colorize: true,
  timestamp: function() {
    var date = new Date();
    return date.getDate() + '/' + (date.getMonth() + 1) + ' ' + date.toTimeString().substr(0,5) + ' [' + global.process.pid + ']';
  },
  level: 'info'
});

module.exports = winston;