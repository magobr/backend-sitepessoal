const connection = require('../config/dbconfig');

var dataUpdate = {
    userUpdate:function(dados, id, callback){
        connection.query('UPDATE dados SET id = ?, nome = ? WHERE id = ?', [dados.id, dados.name, id], callback);
    }
}

module.exports = dataUpdate;