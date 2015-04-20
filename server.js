var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(){
	return stylus(str).set('filename', path);
};
//Server configure
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware({
		src: __dirname + '/public', 
		compile: compile
	})
);
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function (req, res){
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res){
	res.render('index');
});

var port = 3030;
app.listen(port);
console.log("Listen port " + port + "...");