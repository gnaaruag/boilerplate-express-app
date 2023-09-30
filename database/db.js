/* for mongodb atlas
const mongoose = require('mongoose');


const connectDB = async () =>
{
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect(process.env.DB,
            {
                useNewUrlParser: true,
            });
            console.log('connected to database...');
    }
    catch (err) {
        console.log(err.message);
        console.log('db error');
        process.exit(1); 
    }
};

module.exports = connectDB;


*/

/* for mysql database on localhost
const mysql = require('mysql');

const connect = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dbname'
    }
);

module.exports = connect;

*/