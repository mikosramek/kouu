'use strict'
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./router');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/v1/', router);

app.use('/', (req, res, next) => {
  return res.status(404).send({ error: `Endpoint doesn't exist.`, message: `API is located at /api/v1/` });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Running on: localhost:${PORT}`);
});