'use strict'

require('dotenv').config();
const fs = require('fs');
const mysql = require('mysql');

const sqlConnectionSettings = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_ADMIN_USER,
  password: process.env.DB_ADMIN_PASS
}

const getFileContent = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if(err) return rej(err);
      if(data !== ''){
        res(data);
      }else {
        rej('The file is empty.');
      }
    });
  })
}

const formatData = (data) => {
  return new Promise((res, rej) => {
    getFileContent('./fileConfig.json').then(fileConfig => {
      const config = JSON.parse(fileConfig);
      if(config === '') { return rej('file config file missing') };
      const entries = data.split('\n').splice(config.startingLine);
      const prunedData = [];
      entries.forEach((line) => {
        const splitLine = line.replace('\r', '').split(config.seperatingCharacter);
        prunedData.push(splitLine);
      })
      res(prunedData);
    }).catch(e => {
      rej(e);
    })
  })
}

const clearLastChar = (string) => {
  return string.trim().slice(0, string.length-1);
}

const spliceEntryAndPresets = (entry, presets) => {
  presets.forEach(preset => {
    const {value, index} = preset;
    entry.splice(index, 0, value);
  })
  let result = '';
  entry.forEach(item => {
    result += `"${item}",`;
  })
  result = clearLastChar(result);
  return result;
}

const constructDatabaseQuery = (data) => {
  return new Promise((res, rej) => {
    getFileContent('./dbSchema.json').then(fileSchema => {
      const schema = JSON.parse(fileSchema);
      const {table, values, presets, primaryKey } = schema;
      let query = `INSERT INTO ${table} (`;
      values.forEach(value => {
        query += `${value},`
      });
      query = clearLastChar(query);
      query += ')\n VALUES\n';
      data.forEach((entry, i) => {
        query += `(${spliceEntryAndPresets(entry, presets)}),`;
      });
      query = clearLastChar(query);
      query += ';';
      res(query);
    }).catch(e => {
      rej(e);
    });
  });
}

const sendQueryToDatabase = (query) => {
  return new Promise((res, rej) => {
    const connection = mysql.createConnection(sqlConnectionSettings);
    connection.connect(err => {
      if(err) return rej(err);
      connection.query(query, (err, result) => {
        connection.end();
        if(err) return rej(err);
        res(result);
      });
    })
  });
}

const init = () => {
  const dbFilePath = process.argv[2];
  getFileContent(dbFilePath)
    .then(formatData)
    .then(constructDatabaseQuery)
    .then(sendQueryToDatabase)
    .then(console.log)
    .catch(console.log);
}

init();