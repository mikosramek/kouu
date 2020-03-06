import axios from 'axios';

import { SESSION_ID } from '../utility/LocalKeys';

const postAPI = (path, body) => {
  return axios({
    method: 'POST',
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    data: body,
    headers: { 'Content-Type' : 'application/json' }
  });
}

const putAPI = (path, body) => {
  return axios({
    method: 'PUT',
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    data: body,
    headers: { 'Content-Type' : 'application/json' }
  });
}

const getAPI = (path, params) => {
  axios({
    method: 'GET',
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    params: params
  }).then( (result) => {
    
  }).catch( (error) => {
    
  });
}

const AccountFunctions = {};

AccountFunctions.checkLocalForLogin = () => {
  return AccountFunctions.logInWithSession(localStorage.getItem(SESSION_ID));
}
AccountFunctions.logInWithSession = (session_id) => {
  return new Promise((resolve, reject) => {
    if(!session_id) return reject();
    postAPI('api/v1/accounts/login',{session_id: session_id})
      .then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      })
  })
}
AccountFunctions.logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    postAPI('api/v1/accounts/login', {user:email, pass:password})
      .then(result => {
        localStorage.setItem(SESSION_ID, result.data.session_id);
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
  })
}
AccountFunctions.logOut = () => {
  return new Promise((resolve, reject) => {
    localStorage.clear(SESSION_ID);
    resolve();
  })
}
AccountFunctions.signUp = (email, name, password) => {
  return new Promise((resolve, reject) => {
    putAPI('api/v1/accounts/signup', {name: name, email: email, password:password})
      .then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
  });
}
AccountFunctions.updateSettings = (account, settings) => {
  console.log('POST updated settings', settings);
}
AccountFunctions.updateWord = (account, wordID) => {
  console.log('POST userid, and wordid');
  console.log('backend handles if it needs to be updated or not??');
}


AccountFunctions.getLessons = (user) => {
  return new Promise((resolve, reject) => {
    getAPI('api/v1/lessons', {user:user})
      .then(result => {

      }).catch(error => {

      });
  })
}

export default AccountFunctions;