var express = require('express');
var app = express();

var mongoose = require('mongoose');

var passport = require('passport'),
    passportLocal = require('passport-local'),
    LocalStrategy = passportLocal.Strategy;


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(env);

var config = require('./server/config/config')[env];

//Express middlewares and some configurations
require('./server/config/express.js')(app, config);

//connect with mongoDB
require('./server/config/mongoose')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
   function(username, password, done){
        User.findOne({ userName : username }).exec(function(err, user){
            if(user && user.authenticate(password))
                return done(null, user);
            return done(null, false);
        });
   }
));

passport.serializeUser(function(user, done){
    if (user)
        done(null, user);
});

passport.deserializeUser(function(){
    User.findOne({_id:_id}).exec(function(err, user){
        if(user)
            return done(null, user);
        return done(null, false);
    });
});


require('./server/config/routes')(app);

console.log(config);

app.listen(config.port);
console.log("Listen port " + config.port + "...");