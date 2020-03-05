import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Backgrounds from '../style-components/style-backgrounds';
import { H1 } from '../style-components/style-text';

import LoggedInNav from './LoggedInNav';
import CustomLink from './Nav/CustomLink';

import './Header.scss';

const Header = (props) => {
  const [isMenuShowing, setMenuShowing] = React.useState(false);

  const {isAttemptingAccountAction, isLoggedIn} = props;

  return (
    <Backgrounds.Header>
      <Backgrounds.Wrapper>
        <a href='#maincontent' className='skip-link'>Skip to main content.</a>
        <H1><Link to="/">KOUU</Link></H1>
        <button className={`nav-button${isMenuShowing ? ' shifted' : ''}`} onClick={() => { setMenuShowing(!isMenuShowing) }}>
          <i className={`fas${isMenuShowing ? ' fa-times' : ' fa-bars'}`}></i>
        </button>
        <nav className={`side-nav${isMenuShowing ? ' shifted' : ''}`}>
          <ul>
            {
              isLoggedIn
                ? <LoggedInNav hideMenu={() => setMenuShowing(false)} />
                : <li>
                    <CustomLink className="account-form-link" path="/login" text="Login" disabled={isAttemptingAccountAction} />
                    <p>or</p>
                    <CustomLink className="account-form-link" path="/signup" text="Signup" disabled={isAttemptingAccountAction} />
                    <p>or</p>
                    <CustomLink className="account-form-link" path="/signup" text="Reset your password" disabled={isAttemptingAccountAction} />
                  </li>
            }
          </ul>
        </nav>
      </Backgrounds.Wrapper>
    </Backgrounds.Header>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isAttemptingAccountAction: state.isAttemptingAccountAction
  }
}

export default connect(mapStateToProps)(Header);