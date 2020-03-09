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


wordController.getWords = (id) => {
  const query = `SELECT korean, english, type FROM words WHERE lesson=${id};`
  return new Promise((res, rej) => {
    database.generalQuery(query).then(res).catch(rej);
  })
}

module.exports = wordController;