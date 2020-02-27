const express = require('express');
const router = express.Router();

const userController = require('../database-controller/user-controller.js');

router.post('/login', (req, res) => {
  //check for param of key=true
  // if it is do different db query that only looks for session key, that's taken from body instead of user/pass
  console.log(req.body);
  const data = req.body;
  if(data){
    const email = data.user ? data.user : null;
    const pass = data.pass ? data.pass : null;
    if(!email || !pass) { 
      return res.status(400).send({ error: 'Something failed!' });
    }
    const user = userController.getUser(email, pass);
    if(user){
      return res.send(user);
    }else {
      return res.status(401).send({ error: 'Username or Password bad.' });
    }
  }
  return res.status(400).send({ error: 'No data sent!' });
});


router.delete('/logout', (req, res) => {
  //delete the session token :)
  res.send(true);
});

module.exports = router;