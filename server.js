var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = process.env.PORT || 3030;
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// var env = 'production';
console.log(env);
var db = mongoose.connection;

var app = express();

function compile(){
	return stylus(str).set('filename', path);
};
//Server configure
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(stylus.middleware({
		src: __dirname + '/public', 
		compile: compile
	})
);
app.use(express.static(__dirname + '/public'));

//connect with mongoDB
if(env === 'development'){
	mongoose.connect('mongodb://localhost/multivision');
}else{
	mongoose.connect('mongodb://lugearma:geroplas@ds037447.mongolab.com:37447/multivision');
}
db.on('error', console.error.bind(console, 'connection error...') );
db.once('open', function callback() {
	console.log('multivision db opened');
});

//Create schema
var messageSchema = mongoose.Schema({
	message: String	
});
var Message = mongoose.model('message', messageSchema);
var mongoMessage;

Message.findOne().exec(function (err, messageDoc){
	console.log(messageDoc.message);
	mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function (req, res){
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res){
	res.render('index', { 
		mongoMessage: mongoMessage 
	});
});

app.listen(port);
console.log("Listen port " + port + "...");