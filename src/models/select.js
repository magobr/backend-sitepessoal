const connection = require('../config/dbconfig');


var queryResult = {
    getDados:function(callback){
        connection.query('SELECT * FROM dados', callback);
    },
    getDadosById:function(id, callback){
        connection.query('SELECT * FROM dados where id = ?', id, callback)
    },
    getLogin:function(dados, callback) {
        connection.query('SELECT * FROM dados WHERE nome = ? AND pass = ?', [dados.name, dados.pass], callback)
    }
}


module.exports = queryResult;