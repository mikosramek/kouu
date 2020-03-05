import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AccountFunctions from '../../utility/AccountFunctions';
import Input from '../Forms/Input';
import CustomLink from '../Nav/CustomLink';
import { login, attemptAccountAction, accountActionFailed } from '../../connect/actions';

import '../AccountForm.scss';

const Login = (props) => {

  const { dispatch, isAttemptingAccountAction } = props;

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
    tryToLogin();
  }

  const tryToLogin = () => {
    dispatch(attemptAccountAction());
    AccountFunctions.logIn(email, password).then(data => {
      dispatch(login(data));
      props.history.push('/');
    }).catch(error => {
      dispatch(accountActionFailed(error));
    });
  }

  return (
    <div className={`account-form main-login`}>
      <form onSubmit={submitForm} className="account-login">
        <label htmlFor="email">Email / Username:</label>
        <Input id="name" val={email} changeVal={setEmail} disabled={isAttemptingAccountAction} />
        <label htmlFor="password">Password:</label>
        <Input id="password" type="password" val={password} changeVal={setPassword} disabled={isAttemptingAccountAction} />
        <button>Log In</button>
      </form>
      <p>
        <CustomLink disabled={isAttemptingAccountAction} className="account-form-link" path="/signup" text="Sign Up" /> or <CustomLink disabled={isAttemptingAccountAction} className="account-form-link" path="/signup" text="Reset your password" />
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAttemptingAccountAction: state.isAttemptingAccountAction
  }
}

export default connect(mapStateToProps)(withRouter(Login));