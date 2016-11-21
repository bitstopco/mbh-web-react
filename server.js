var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.use(express.static(__dirname + '/public'));


app.get('*',function(req, res, next){
    console.log('app.get(\'*\'');
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        console.log('text');
        console.log(text);
        
		res.send(text);
	});
});

app.listen(port,function(){
	console.log('SetLife: Server runing on port ' + port)
});