'use strict'
const http = require('http');
const PORT = 3001;

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(PORT, () => {
  console.log(`Server started on: localhost:${PORT}`)
});