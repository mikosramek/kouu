import { LOGIN, LOGOUT, ATTEMPTING_ACCOUNT_ACTION, FAILED_ACCOUNT_ACTION } from './types';

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



export const attemptAccountAction = () => {
  return {
    type: ATTEMPTING_ACCOUNT_ACTION,
  }
}

export const accountActionFailed = (error) => {
  return {
    type: FAILED_ACCOUNT_ACTION,
    error: error
  }
}