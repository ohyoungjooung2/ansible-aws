const util =require('util');
const mysql =require('mysql');
/**
 * Connection to the database
 */
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'admin',
    password: 'adminpass88*A',   
    database: 'www'
});

pool.getConnection((err,connection)=>{
    if(err)
       console.error("Something went wrong connectiont to the database..");
    if(connection)
       connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
