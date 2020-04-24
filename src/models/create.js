const connection = require('../config/dbconfig');

var dataCreate = {
    userCreate:function(dados, callback){
        connection.query('INSERT INTO dados values (?, ?, ?)', [dados.id, dados.name, dados.pass], callback);
    }
}

module.exports = dataCreate;