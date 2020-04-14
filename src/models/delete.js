const connection = require('../config/dbconfig');

var dataDelete ={ 
    userDelete:function (id, callback) {
        connection.query('DELETE FROM dados WHERE id = ?', id, callback)
    }
}


module.exports = dataDelete;