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

const userController = {};

userController.getUser = (login, password) => {
  let userToReturn = null;
  users.forEach((user) => {
    if((user.email === login || user.name === login) && user.password === password){
      userToReturn = user;
    }
  });
  if(userToReturn) return userToReturn
  return false;
}

module.exports = userController;