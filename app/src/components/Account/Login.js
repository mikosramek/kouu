import React from 'react';

const Login = ({action}) => {
  return (
    <form onSubmit={action} className="account-login">
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button>Log In</button>
    </form>
  )
}

export default Login;