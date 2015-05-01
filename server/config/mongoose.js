mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('multivison db opened');
    });

    var userSchema = mongoose.Schema({
       firstName : String,
       lastName : String,
       userName : String
    });

    var User = mongoose.model('User', userSchema);

    User.find().exec(function (err, collection) {
        if(collection.length == 0){
            User.create({ firstName: 'lugearma', lastName: 'Arias', userName: 'bebe69hot' });
            User.create({ firstName: 'zari', lastName: 'aguilebri', userName: 'xxx' });
            User.create({ firstName: 'fernanas', lastName: 'gnevdsv', userName: 'gerger69hot' });
        }
    })
};