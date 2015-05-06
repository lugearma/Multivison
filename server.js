var express = require('express');
var app = express();


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(env);

var config = require('./server/config/config')[env];

//Express middlewares and some configurations
require('./server/config/express.js')(app, config);

//connect with mongoDB
require('./server/config/mongoose')(config);

//Passport configure
require('./server/config/passport')();

require('./server/config/routes')(app);

console.log(config);

app.listen(config.port);
console.log("Listen port " + config.port + "...");