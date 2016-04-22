var socket = io('/');

socket.on('getLastMsgs', function(data) {
  data.forEach(function(item) {
    $('.msgs').prepend(format(item));
  });
});

socket.on('newMsg', function(data) {
  $('.msgs').append(format(data, data.nickname === $('#nickname').val()));
});

$('#send').click(() => {
  let nickname = $('#nickname').val();
  let msg = $('#msg').val();

  socket.emit('send', {
    nickname: nickname,
    msg: msg
  });
});

socket.emit('getLastMsgs');

function format(item, isColored) {
  var str = "";

  if (!isColored)
     str ='<p> [';
  else
    str = '<p style="color: blue"> [';

  return str + new Date(item.date).toLocaleTimeString() + '] ' + item.nickname + ' ' + ' > ' + item.msg + '</p>';
}