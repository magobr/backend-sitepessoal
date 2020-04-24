const connection = require('../config/dbconfig');

var dataUpdate = {
    userUpdate:function(dados, id, callback){
        connection.query('UPDATE dados SET id = ?, nome = ?, pass = ? WHERE id = ?', [dados.id, dados.name, dados.pass, id], callback);
    }
}

module.exports = dataUpdate;