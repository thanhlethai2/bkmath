import mysql from 'mysql2/promise';

const mysqlPool = mysql.createPool({
    host: 'localhost',
    database: 'bkmath',
    user: 'root',
    password: '',
});

export default mysqlPool
