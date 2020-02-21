import React from 'react';
import Backgrounds from '../style-components/style-backgrounds';
import { H1 } from '../style-components/style-text';

import './Header.scss';

const Header = (props) => {
  const { username, points } = props.user;

  const [isMenuShowing, setMenuShowing] = React.useState(true);

  return (
    <Backgrounds.Header>
      <Backgrounds.Wrapper>
        <a href='#maincontent' class='skip-link'>Skip to main content.</a>
        <H1>KOUU</H1>
        <button className={`nav-button${isMenuShowing ? ' shifted' : ''}`} onClick={() => { setMenuShowing(!isMenuShowing) }}>
          <i className={`fas${isMenuShowing ? ' fa-times' : ' fa-bars'}`}></i>
        </button>
        <nav className={`side-nav${isMenuShowing ? ' shifted' : ''}`}>
          <ul>
            <li className="-user"><p>{username} | {points}Ks</p></li>
            <li><button><i className="fas fa-school"></i> Play</button></li>
            <li><button><i className="fas fa-chart-line"></i> My Progress</button></li>
            <li><button><i className="fas fa-sticky-note"></i> My Study Notes</button></li>
            <li><button><i className="fas fa-cog"></i> Settings</button></li>
            <li className="-divider">
              <svg xmlns="http://www.w3.org/2000/svg" height="3" viewBox="0 0 1188 3">
                <line x1="1.5" x2="1186.5" y1="0" y2="0" fill="none" stroke-linecap="square" />
              </svg>
            </li>
            <li><button><i className="far fa-question-circle"></i> About</button></li>
            <li><button><i className="fas fa-sign-out-alt"></i> Log Out</button></li>
          </ul>
        </nav>
      </Backgrounds.Wrapper>
    </Backgrounds.Header>
  )
}

export default Header;