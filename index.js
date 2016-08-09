var express = require('express');
var cors = require('cors');
var server = express();

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
server.use(cors());


server.get('/', function(req, res, next){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...' + port);
});
