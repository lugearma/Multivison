var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users');

module.exports = function(app){

    //list of users
    app.get('/api/users', auth.requiresRole('admin'), users.getUser);

    app.post('/api/users', users.createUser);

    //partials files
    app.get('/partials/*', function (req, res){
        res.render('../../public/app/' + req.params[0]);
    });

    //login
    app.post('/login', auth.authenticate);
    
    //logout
    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });

    //any other route
    app.get('*', function (req, res){
        res.render('index', { bootstrappedUser: req.user });
    });

};