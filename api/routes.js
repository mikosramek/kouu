'use strict'

const database = require('./database.js');

const requestHandler = (req, res) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  const url = req.url;
  console.log(url);
  if(url === '/login'){
    const userData = database.getUser('migo@migosramek.ca', 'migo');
    console.log(userData);
    res.setHeader('Content-Type', 'text/json');
    res.write(JSON.stringify(userData));
    return res.end();
  }
}

module.exports = requestHandler;