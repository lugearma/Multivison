var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
        firstName : {type: String, required: '{PATH} is required!'},
        lastName : {type: String, required: '{PATH} is required!'},
        userName : {
        	type: String,
        	required: '{PATH} is required!',
        	unique: true
        },
	    salt: {type: String, required: '{PATH} is required!'},
        hashed_pwd: {type: String, required: '{PATH} is required!'},
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function (passwordToMatch){
            return encrypt.hashPwd(this.salt, passwordToMatch) == this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);


function createDefaultUsers(){

    User.find().exec(function (err, collection) {
        if(collection.length == 0){

            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'joe');
            User.create({
                firstName: 'Joe',
                lastName: 'Arias',
                userName: 'joe',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'atza');
            User.create({
                firstName: 'Atzari',
                lastName: 'Aguilera',
                userName: 'atza',
                salt: salt,
                hashed_pwd: hash,
                roles: []
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'bebe');
            User.create({
                firstName: 'Fernando',
                lastName: 'Gomez',
                userName: 'bebe',
                salt: salt,
                hashed_pwd: hash
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;