import { LOGIN, LOGOUT, ATTEMPTING_ACCOUNT_ACTION, FAILED_LOGIN } from './types';

export const login = (userdata) => {
  return {
    type: LOGIN,
    user: userdata
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const attemptLogin = () => {
  return {
    type: ATTEMPTING_ACCOUNT_ACTION,
  }
}

export const loginFailed = (error) => {
  return {
    type: FAILED_LOGIN,
    error: error
  }
}