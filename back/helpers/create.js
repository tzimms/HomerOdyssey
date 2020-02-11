const connection = require('./db');

connection.query(
  `
    CREATE TABLE IF NOT EXISTS users
(
    id INTEGER AUTO_INCREMENT,
    email VARCHAR(90) UNIQUE,
    password VARCHAR(90),
    name VARCHAR(90),
    lastname VARCHAR(90),
    PRIMARY KEY (id)
)`,
  (err) => {
    if (err) {
      console.log(err);
      connection.end();
    } else {
      console.log('users created');
      connection.end();
    }
  },
);
