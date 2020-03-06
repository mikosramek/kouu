//use mikodog_kouu;
//select email, name, password from users;
'use strict'

const database = require('../database/database');

const userController = {};

userController.checkUserExists = (name, email) => {
  const query = `SELECT COUNT(id) FROM users WHERE email = '${email}' OR name = '${name}'`;
  return new Promise((res, rej) => {
    database.generalQuery(query)
      .then((data) => {
        const count = data[0]['COUNT(id)'];
        if(count === 0){
          res();
        }else {
          rej('User already exists');
        }
      }).catch((e) => {
        console.log(e);
        rej(e);
      });
  })
}

userController.logUserIn = (login, password) => {
  const query = `SELECT name, email, lesson, points, session_id FROM users WHERE (email = '${login}' OR name = '${login}') AND password = '${password}'`;
  return new Promise((res, rej) => {
    database.getSingle(query)
    .then((user) => {
      const { password, email, ...prunedUser } = user;
      res(prunedUser);
    }).catch((e) => {
      console.log(e);
      rej(e);
    });
  })
}

userController.logUserInViaSession = (session_id) => {
  const query = `SELECT name, email, lesson, points, session_id FROM users WHERE session_id = '${session_id}'`;
  return new Promise((res, rej) => {
    database.getSingle(query)
    .then((user) => {
      const { password, email, ...prunedUser } = user;
      res(prunedUser);
    }).catch((e) => {
      console.log(e);
      rej(e);
    });
  })
}

userController.signUserUp = (name, email, password, lesson, points, email_code, session_id) => {
  return new Promise((res, rej) => {
    userController.checkUserExists(name, email)
      .then(() => {
        console.log('user doesn\'t exist');
        const query = `INSERT INTO users (name, email, password, lesson, points, email_code, session_id)
                      VALUES ('${name}', '${email}', '${password}', ${lesson}, ${points}, '${email_code}', '${session_id}');`;
        database.insert(query)
          .then((confirmation) => {
            res(confirmation);
          }).catch((e) => {
            rej(e);
          });
      }).catch((e) => {
        rej(e);
      });
    });
}

module.exports = userController;