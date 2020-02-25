'use strict'

const database = require('./database.js');

const error = (res, code, message) => {
  console.log('error', code, message)
  res.writeHead(code, { 'Content-Type': 'text/plain' });
  return res.end(message);
}

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
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      // const message = parsedBody.split('=')[1].split('+').join(' ');
      console.log(parsedBody);
      if(parsedBody) {
        // console.log(JSON.parse(parsedBody));
        // const user = parsedBody['user'] ? parsedBody['user'] : null;
        // const pass = parsedBody['pass'] ? parsedBody['pass'] : null;
        // if(!user || !pass) {
        //   return error(res, 400, 'username or password missing from request.');
        // }
        const userData = database.getUser('migo@migosramek.ca', 'migo');
        res.setHeader('Content-Type', 'text/json');
        res.write(JSON.stringify(userData));
        return res.end();
      }else{
        return error(res, 400, 'no request body');
      }
    })
  }
}


module.exports = requestHandler;