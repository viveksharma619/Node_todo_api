var configValues = require('./config');

module.exports = {
    getDbConnectionString : function(){
        return 'mongodb://'+configValues.uname+':'+configValues.pwd+'@ds147965.mlab.com:47965/todoapi';
    }
}
