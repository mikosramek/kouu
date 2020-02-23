import React from 'react';

const Login = ({action}) => {
  //get user state, and use it in onSubmit
  return (
    <form onSubmit={() => action({})} className="account-signup">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <label htmlFor="passwordCheck">Confirm Password:</label>
      <input type="password" id="passwordCheck" />
      <button>Sign Up</button>
    </form>
  )
}

export default Login;