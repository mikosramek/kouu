import React from 'react';

import Login from './Account/Login';
import Signup from './Account/Signup';
import Loading from './Account/Loading';

import AccountFunctions from '../utility/AccountFunctions';

import './AccountForm.scss';

const AccountForm = (props) => {

  const [formState, setFormState] = React.useState('login');
  const [isAttemptingAccountAction, setAccountAction] = props.accountAction;
  
  const submitForm = (e, formData) => {
    e.preventDefault();
    setFormState('loading');
    setAccountAction(true);
    switch(formState){
      case 'login': 
        setTimeout(() => AccountFunctions.logIn('migo', 'migo', login), 2000);
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
  
  const login = result => {
    setFormState('login');
    props.logIn(result);
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
        isAttemptingAccountAction 
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
export default AccountForm;