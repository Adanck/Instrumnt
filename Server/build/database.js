"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//debugger;
// pool.then((connect) => {
//     connect.getConnection();
//     console.log('DB conectada')
// });
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
});
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
