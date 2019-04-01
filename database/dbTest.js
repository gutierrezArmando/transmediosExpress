const  mysql = require('mysql');

const dbContection = mysql.createConnection({
    // host: 'juridicosoto.sytes.net',
    host: 'remotemysql.com',
    user: 'WRbQnfMbjg',
    password: 'aKrTg2Jwfb',
    database: 'WRbQnfMbjg'
});

module.exports = dbContection;