var mysql = require("mysql");

var connection = mysql.createConnection({
    port:8889,
    host:"localhost",
    user:"root",
    password:"root",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(connection.threadId);
});

module.exports = connection;