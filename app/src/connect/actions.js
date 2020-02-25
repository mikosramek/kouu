import { LOGIN, LOGOUT, ATTEMPTING_ACCOUNT_ACTION } from './types';

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