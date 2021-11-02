const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'l@wr3nc30871',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;