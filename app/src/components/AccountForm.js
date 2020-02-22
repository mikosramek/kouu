import React from 'react';

const AccountForm = (props) => {
  const action = e => {
    e.preventDefault();
    props.ac.logIn();
  }
  return(
    <form onSubmit={action}>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />
      <button>Log In</button>
    </form>
  );
}
export default AccountForm;