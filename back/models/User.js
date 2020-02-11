
const connection = require(`../helpers/db.js`)

const User = {}


User.create = (userInfo, callback) => {
connection.query( 
    `INSERT INTO users (email, password, name, lastname)
        VALUES (
            ?,
            ?,
            ?,
            ?
    )`,[userInfo.email, userInfo.password, userInfo.name, userInfo.lastname],
  (err, results, fields) => {
    callback(err, results, fields);
    }
)};


module.exports = User; 