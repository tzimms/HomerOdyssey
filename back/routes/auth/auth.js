const express = require('express');

const router = express.Router();

const { createUser } =  require('../../controllers/auth-controller.js');



router.get('/signup', (req, res) => {
  res.send('youhou');
});

router.post('/signup', createUser); 


  module.exports = router;

