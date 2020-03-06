import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Input from '../Forms/Input';
import CustomLink from '../Nav/CustomLink';
import AccountFunctions from '../../utility/AccountFunctions';
import { login, attemptAccountAction, accountActionFailed } from '../../connect/actions';

const Signup = (props) => {
  const {dispatch, isAttemptingAccountAction} = props;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  // to do - use effects for when passwords are entered
  // to do - make sure second password matches
  // to do - maybe make a better email validator
  // to do - set up error from redux and put it into state
  // to do - create an error component that dismisses itself

  const submitForm = e => {
    e.preventDefault();
    console.log(name, email, password, passwordConfirmation);
    // to do - set restrictions on form data
    dispatch(attemptAccountAction());
    tryToSignup();
  }

  const tryToSignup = () => {
    dispatch(attemptAccountAction());
    AccountFunctions.signUp(email, name, password).then(data => {
      AccountFunctions.logInWithSession(data.session_id).then(result => {
        dispatch(login(result));
        props.history.push('/');
      }).catch(error => {
        dispatch(accountActionFailed(error));
      });
    }).catch(error => {
      dispatch(accountActionFailed(error));
    });
  }

  // to do - add error messages
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