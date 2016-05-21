'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/v1/', require('./routes'));

http.listen(10003, function(){
	console.log('listening on *:' + 10003);
});