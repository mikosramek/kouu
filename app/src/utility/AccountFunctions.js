import axios from 'axios';

const queryApi = (path, method, params, body) => {
  console.log(body);
  return axios({
    method: method,
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    params: params,
    data: body,
  });
}


const AccountFunctions = {};

AccountFunctions.logIn = (email, password, callback) => {
  queryApi('login', 'POST', {}, {user:email, pass:password}).then( (result) => {
    callback(result.data);
  }).catch( (error) => {
    console.log(error);
  });
}
AccountFunctions.signUp = (account, callback) => {
  console.log('POST account settings', account);
}
AccountFunctions.updateSettings = (account, settings) => {
  console.log('POST updated settings', settings);
}
AccountFunctions.updateWord = (account, wordID) => {
  console.log('POST userid, and wordid');
  console.log('backend handles if it needs to be updated or not??');
}

export default AccountFunctions;