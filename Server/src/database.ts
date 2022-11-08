import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);
//debugger;
// pool.then((connect) => {
//     connect.getConnection();
//     console.log('DB conectada')
// });
pool.getConnection().then(connection =>{
    pool.releaseConnection(connection);
        console.log('DB is Connected');
})
// pool.on('connection', function (connection) {
//     console.log('DB Connection established');
  
//     connection.on('error', function (err) {
//       console.error(new Date(), 'MySQL error', err.code);
//     });
//     connection.on('close', function (err) {
//       console.error(new Date(), 'MySQL close', err);
//     });
  
//   });
    // .then(() => {
    //     //query
    // })

module.exports = pool;
// pool.getConnection()
//         .then(connection => {
//         pool.releaseConnection(connection);
//     }
// );
