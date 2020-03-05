import axios from 'axios';

// const queryApi = (path, method, params, body) => {
//   console.log(body);
//   return axios({
//     method: method,
//     url: `http://localhost:3001/${path}`,
//     dataResponse: 'json',
//     params: {
//       'hello':'goobye'
//     },
//     data: {
//       'I am':'mad'
//     },
//   });
// }

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


const AccountFunctions = {};

AccountFunctions.logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    postAPI('api/v1/accounts/login', {user:email, pass:password})
      .then(result => {
        resolve(result.data);
      }).catch(error => {
        reject(error);
      });
  })
}
AccountFunctions.signUp = (name, email, password) => {
  return new Promise((resolve, reject) => {
    putAPI('api/v1/accounts/signup', {name: name, email: email, password:password})
      .then( result => {

      }).catch(error => {

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

export default AccountFunctions;