import React from 'react';

const Login = ({action}) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitForm = e => {
    e.preventDefault();
    if(email === '') {
      alert('please type in an email');
      return;
    }
    if(password === '') {
      alert('please type in a password');
      return;
    }
    action(e, {email, password});
  }

  return (
    <form onSubmit={submitForm} className="account-login">
      <label htmlFor="email">Email / Username:</label>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Log In</button>
    </form>
  )
}

export default Login;