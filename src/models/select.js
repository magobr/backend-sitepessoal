const connection = require('../config/dbconfig');


var queryResult = {
    getDados:function(callback){
        connection.query('SELECT * FROM dados', callback);
    },
    getDadosById:function(id, callback){
        connection.query('SELECT * FROM dados where id = ?', id, callback)
    }
}


module.exports = queryResult;