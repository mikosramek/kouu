import { LOGIN, LOGOUT, ATTEMPTING_ACCOUNT_ACTION, FAILED_ACCOUNT_ACTION } from './types';

const initialState = {
  user: {},
  isLoggedIn: false,
  isAttemptingAccountAction: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        isAttemptingAccountAction: false,
        accountError: {},
      }
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false
      }
    case ATTEMPTING_ACCOUNT_ACTION:
      return {
        ...state,
        isAttemptingAccountAction: true,
      }
    case FAILED_ACCOUNT_ACTION:
      return {
        ...state,
        isAttemptingAccountAction: false,
        accountError: action.error
      }
    default:
      return state;
  }
}

export default userReducer;