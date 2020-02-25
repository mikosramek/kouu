import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../connect/actions';
import MenuButton from './MenuButton';

const LoggedInNav = (props) => {
  const {name, points} = props.user;
  const { dispatch } = props;

  const navigate = redirect => {
    props.history.push(`/${redirect}`);
    props.hideMenu();
  }

  return(
    <>
      <li className="-user"><p>{name} | {points}Ks</p></li>
      <MenuButton icon='fa-school' text='Play' action={() => { navigate('play'); }} />
      <MenuButton icon='fa-chart-line' text='My Progress' action={() => { navigate('progress'); }} />
      <MenuButton icon='fa-sticky-note' text='My Study Notes' action={() => { navigate('notes'); }} />
      <MenuButton icon='fa-cog' text='Settings' action={() => { navigate('settings'); }} />
      <li className="-divider">
        <svg xmlns="http://www.w3.org/2000/svg" height="3" viewBox="0 0 1188 3">
          <line x1="1.5" x2="1186.5" y1="0" y2="0" fill="none" strokeLinecap="square" />
        </svg>
      </li>
      <MenuButton icon='far fa-question-circle' text='About' action={() => { navigate('about');  }} />
      <MenuButton icon='fa-sign-out-alt' text='Log Out' action={() => dispatch(logout)} />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(withRouter(LoggedInNav));