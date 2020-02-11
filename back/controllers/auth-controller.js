const User = require('../models/User');

const createUser = (req, res) => {
  console.log(req.body, 'he')
    User.create(req.body, (err) => {
      if (err)res.json({ error: err });
      res.sendStatus(200);
    });
  };
  

  module.exports = { createUser };