import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../Forms/Input';
import CustomLink from '../Nav/CustomLink';
import AccountFunctions from '../../utility/AccountFunctions';
import { attemptAccountAction, accountActionFailed } from '../../connect/actions';

const Signup = (props) => {
  const {dispatch, isAttemptingAccountAction} = props;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  const submitForm = e => {
    e.preventDefault();
    console.log(name, email, password, passwordConfirmation);
    dispatch(attemptAccountAction());
    // tryToSignup();
  }

  const tryToSignup = (email, name, password) => {
    dispatch(attemptAccountAction());
    AccountFunctions.signUp(email, name, password).then(data => {
      props.history.push('/');
    }).catch(error => {
      dispatch(accountActionFailed(error));
    });
  }
  return (
    <div className={`account-form main-login`}>
      <form onSubmit={submitForm} className="account-signup">
        <label htmlFor="name">Username:</label>
        <Input id="name" val={name} changeVal={setName} disabled={isAttemptingAccountAction} />
        <label htmlFor="email">Email:</label>
        <Input id="email" type="email" val={email} changeVal={setEmail} disabled={isAttemptingAccountAction} />
        <label htmlFor="password">Password:</label>
        <Input id="password" type="password" val={password} changeVal={setPassword} disabled={isAttemptingAccountAction} />
        <label htmlFor="passwordCheck">Confirm Password:</label>
        <Input id="password" type="password" val={passwordConfirmation} changeVal={setPasswordConfirmation} disabled={isAttemptingAccountAction} />
        <button disabled={isAttemptingAccountAction}>Sign Up</button>
      </form>
      <p>
        <CustomLink disabled={isAttemptingAccountAction} className="account-form-link" path="/login" text="Login" /> or <CustomLink disabled={isAttemptingAccountAction} className="account-form-link" path="/signup" text="Reset your password" />
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAttemptingAccountAction: state.isAttemptingAccountAction
  }
}

export default connect(mapStateToProps)(withRouter(Signup));