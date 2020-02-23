//use mikodog_kouu;
//select email, name, password from users;
'use strict'

const users = 
[
  {
    name: 'migo',
    email: 'migo@migosramek.ca',
    password: 'migo',
    lesson: 2,
    points: 300
  },
  {
    name: 'jobbo',
    email: 'jobbo@migosramek.ca',
    password: 'jobbo',
    lesson: 5,
    points: 20
  },
]

const database = {};

database.getUser = (login, password) => {
  let userToReturn;
  users.forEach((user) => {
    if(user.email === login && user.password === password){
      userToReturn = user;
    }
  });
  if(userToReturn) return userToReturn
  return { error:'Username and/or password are incorrect.' }
}

module.exports = database;