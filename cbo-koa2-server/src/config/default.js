/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */

let host = '139.224.44.238';
// host = 'mysql_server_host';
// if (process.env.NODE_ENV === 'dev') {
//   host = '121.199.25.36';
// }

let db = {
    host: host,
    port: '3307',
    database: 'cbo',
    user: 'root',
    password: 'qwrYlksfnDqrfsa*3weaew'
}

// db = {
//     host: '127.0.0.1',
//     port: '3306',
//     database: 'cbo',
//     user: 'root',
//     password: 'su139527'
// }

export default {
  port: 3002,
  db
}
