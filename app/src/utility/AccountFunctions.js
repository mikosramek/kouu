import { login } from '../connect/actions';
import axios from 'axios';

const queryApi = (path, params) => {
  return axios({
    method: 'GET',
    url: `http://localhost:3001/${path}`,
    dataResponse: 'json',
    params: params
  });
}

const AccountFunctions = {};

AccountFunctions.logIn = (email, password, callback) => {
  queryApi('login').then( (result) => {
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