import React from 'react';
import { Link } from 'react-router-dom';

import Backgrounds from '../style-components/style-backgrounds';
import { H1 } from '../style-components/style-text';

import LoggedInNav from './LoggedInNav';
import AccountForm from './AccountForm';

import './Header.scss';

const Header = (props) => {
  const [isMenuShowing, setMenuShowing] = React.useState(false);

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
              props.isLoggedIn
                ? <LoggedInNav user={props.user} logOut={props.logOut} hideMenu={() => setMenuShowing(false)} />
                : <li><AccountForm logIn={props.logIn} accountAction={props.accountAction} class={"nav-login"} /></li>
            }
          </ul>
        </nav>
      </Backgrounds.Wrapper>
    </Backgrounds.Header>
  )
}

export default Header;