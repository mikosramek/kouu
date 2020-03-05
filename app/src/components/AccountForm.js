import React from 'react';
import { connect } from 'react-redux';

import Login from './Account/Login';
import Signup from './Account/Signup';
import Loading from './Account/Loading';

import AccountFunctions from '../utility/AccountFunctions';
import { login, attemptAccountAction, accountActionFailed } from '../connect/actions';

import './AccountForm.scss';

const AccountForm = (props) => {
  const { dispatch } = props;
  const [formState, setFormState] = React.useState('login');

  const submitForm = (e, formData) => {
    e.preventDefault();
    setFormState('loading');
    switch(formState){
      case 'login': 
        tryToLogin(formData);
        break;
      case 'signup':
        tryToSignup(formData);
        break;
      case 'reset':
        console.log('WIP RESET');
        break;
      default:
        console.error('no from state set');
    }
  }

  const tryToLogin = ({email, password}) => {
    dispatch(attemptAccountAction());
    AccountFunctions.logIn(email, password).then(data => {
      dispatch(login(data));
    }).catch(error => {
      dispatch(accountActionFailed(error));
      setFormState('login');
    });
  }

  const tryToSignup = ({email, name, password}) => {
    dispatch(attemptAccountAction());
    AccountFunctions.signUp(email, name, password).then(data => {
      
    }).catch(error => {
      dispatch(accountActionFailed(error));
      setFormState('signup');
    });
  }

  const forms = {
    'login':<Login action={submitForm} />,
    'signup':<Signup action={submitForm} />,
    'reset':<Login action={submitForm} />,
  }

  return (
    <div className={`account-form ${props.class}`}>
      {
        props.isAttemptingAccountAction 
        ? <Loading />
        : <>
            {
              forms[formState]
            } 
            <p>
              { formState === 'login'
                ? <span className='account-form-link' onClick={() => setFormState('signup')}>Sign Up</span> 
                : <span className='account-form-link' onClick={() => setFormState('login')}>Log In</span>
              }
              <span> or </span><span className='account-form-link' onClick={() => setFormState('login')}>Reset your password</span>.
            </p>
          </>
      }
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isAttemptingAccountAction: state.isAttemptingAccountAction
  }
}

export default connect(mapStateToProps)(AccountForm);