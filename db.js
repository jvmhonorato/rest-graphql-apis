const mysql = require('mysql2/promise')


//WHITOUT CONNECTION POOL
    module.exports =  mysql.createConnection({
        host:'localhost',
        user: 'root',
        database: 'cat-products'
})

//WITH CONNECTION POOL
// module.exports =  mysql.createPool({
//     host:'localhost',
//     user: 'root',
//     database: 'cat-products',
//     waitForConnections: true,
//     connectionLimit: 20,
//     queueLimit: 0
// })