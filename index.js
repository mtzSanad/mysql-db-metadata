const mysql = require('mysql');
const dbConfig = require('./db.config.js');
const { schemas } = require('./queries.sql.js');

//Configure db
const db = mysql.createConnection(dbConfig);

//Connecting to db
db.connect(err => {
    if (err) throw err
    console.log("Connected successfully to mysql database.");
});

const getSchemas = () => {
    db.query(schemas, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};
