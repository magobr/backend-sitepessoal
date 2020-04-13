const mysql = require('mysql');

const conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "teste"
});  

conection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conection;