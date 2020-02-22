import React from 'react';
import { withRouter } from 'react-router-dom';

import MenuButton from './MenuButton';

const LoggedInNav = (props) => {
  const {name, points} = props.user;
  const [redirect, setRedirect] = React.useState('');

  React.useEffect(()=>{
    props.history.push(`/${redirect}`);
  }, [redirect, props.history]);

  return(
    <>
      <li className="-user"><p>{name} | {points}Ks</p></li>
      <MenuButton icon='fa-school' text='Play' action={() => { setRedirect('play') }} />
      <MenuButton icon='fa-chart-line' text='My Progress' action={() => { setRedirect('progress') }} />
      <MenuButton icon='fa-sticky-note' text='My Study Notes' action={() => { setRedirect('notes') }} />
      <MenuButton icon='fa-cog' text='Settings' action={() => { setRedirect('settings') }} />
      <li className="-divider">
        <svg xmlns="http://www.w3.org/2000/svg" height="3" viewBox="0 0 1188 3">
          <line x1="1.5" x2="1186.5" y1="0" y2="0" fill="none" strokeLinecap="square" />
        </svg>
      </li>
      <MenuButton icon='far fa-question-circle' text='About' action={() => { setRedirect('about') }} />
      <MenuButton icon='fa-sign-out-alt' text='Log Out' action={props.ac.logOut} />
    </>
  )
}

export default withRouter(LoggedInNav);