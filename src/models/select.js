const connection = require('../config/dbconfig');


var queryResult = {
    getDados:function(callback){
        connection.query('SELECT * FROM dados', callback);
    }   
}


module.exports = queryResult;