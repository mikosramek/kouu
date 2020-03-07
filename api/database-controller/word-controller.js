'use strict'

const database = require('../database/database');

const wordController = {};

wordController.getLessons = () => {
  const query = 'SELECT id, name, cost FROM lessons';
  return new Promise((res, rej) => {
    database.generalQuery(query)
      .then(data => {
        res(data);
      }).catch(e => {
        rej(e);
      })
  }) 
}

module.exports = wordController;