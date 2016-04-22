'use strict';

require('./src/express');

let io = require('socket.io')(22079),
  winston = require('winston'),
  Msg = require('./src/model/msg');

io.on('connection', (socket) => {
  socket.on('send', (data) => {
    let nickname = data.nickname;
    let text = data.msg;

    winston.info(`${data.nickname} send: ${data.msg}`);

    let msg = new Msg({
      nickname: nickname,
      msg: text
    });

    msg.save()
      .then((msg) => {
        io.emit('newMsg', msg);
      })
      .catch((err) => {
        winston.error(err);
      });
  });

  socket.on('getLastMsgs', () => {
    Msg.getLastTen()
      .then((result) => {
        socket.emit('getLastMsgs', result);
      });
  });
});