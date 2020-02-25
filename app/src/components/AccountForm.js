import React from 'react';
import { connect } from 'react-redux';

import Login from './Account/Login';
import Signup from './Account/Signup';
import Loading from './Account/Loading';

import AccountFunctions from '../utility/AccountFunctions';
import { login, attemptLogin } from '../connect/actions';

import './AccountForm.scss';

const AccountForm = (props) => {
  const { dispatch } = props;
  const [formState, setFormState] = React.useState('login');

  const submitForm = (e, formData) => {
    e.preventDefault();
    setFormState('loading');
    switch(formState){
      case 'login': 
        dispatch(attemptLogin());
        AccountFunctions.logIn('migo', 'migo', loginCallback);
        break;
      case 'signup':
        AccountFunctions.signUp(formData);
        break;
      case 'reset':
        console.log('WIP RESET');
        break;
      default:
        console.error('no from state set');
    }
  }
  const loginCallback = data => {
    dispatch(login(data));
  }
  const changeFormState = state => {
    setFormState(state);
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
                ? <span className='account-form-link' onClick={() => changeFormState('signup')}>Sign Up</span> 
                : <span className='account-form-link' onClick={() => changeFormState('login')}>Log In</span>
              }
              <span> or </span><span className='account-form-link' onClick={() => changeFormState('login')}>Reset your password</span>.
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