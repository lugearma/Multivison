var User = require('mongoose').model('User');
var crypto = require('../utilities/encryption');

exports.getUser = function (req, res){
    User.find({}).exec(function (err, collections) {
        res.send(collections);
    });
}

exports.createUser = function (req, res, next){
	var userData = req.body;
	userData.salt = crypto.createSalt();
	userData.hashed_pwd = crypto.hashPwd(userData.salt, userData.password);
	User.create(userData, function (err, user){
		if(err){
			if(err.toString().indexOf('E11000') > -1){
				err = new Error('Duplicate User');
			}
			res.status(400);
			return res.send({ reason: err.toString() });
		}
		req.logIn(user, function(err){
			if(err){return next(err);}
			res.send(user);
		});
	});
}