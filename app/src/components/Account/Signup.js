import React from 'react';

import Input from '../Forms/Input';

const Login = ({action}) => {
  //get user state, and use it in onSubmit

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  const submitForm = e => {
    e.preventDefault();
    console.log(name, email, password, passwordConfirmation);
    // action({});
  }

  return (
    <form onSubmit={submitForm} className="account-signup">
      <label htmlFor="name">Username:</label>
      <Input id="name" val={name} changeVal={setName} />
      <label htmlFor="email">Email:</label>
      <Input id="email" type="email" val={email} changeVal={setEmail} />
      <label htmlFor="password">Password:</label>
      <Input id="password" type="password" val={password} changeVal={setPassword} />
      <label htmlFor="passwordCheck">Confirm Password:</label>
      <Input id="password" type="password" val={passwordConfirmation} changeVal={setPasswordConfirmation} />
      <button>Sign Up</button>
    </form>
  )
}

export default Login;