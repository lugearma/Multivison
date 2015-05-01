var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development : {
        db : 'mongodb://localhost/multivision',
        rootPath : rootPath,
        port : process.env.PORT || 3030
    },

    production : {
        db : 'mongodb://lugearma:geroplas@ds037447.mongolab.com:37447/multivision',
        rootPath : rootPath,
        port : process.env.PORT || 80
    }
};