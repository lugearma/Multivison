var mongoose = require('mongoose');
var encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
        firstName : String,
        lastName : String,
        userName : String,
        salt: String,
        hashed_pwd: String,
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