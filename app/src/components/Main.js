import React from 'react';
import { Route } from 'react-router-dom';

import Backgrounds from '../style-components/style-backgrounds';

import AccountForm from './AccountForm';
import Play from './Main/Play';

const Main = (props) => {
  return (
    <Backgrounds.Main id="maincontent">
      <Backgrounds.Wrapper>
        {
          props.isLoggedIn 
          ? <>
              <Route exact path="/play" component={Play} />
              <Route exact path="/progress" component={Play} />
              <Route exact path="/notes" component={Play} />
              <Route exact path="/settings" component={Play} />
              <Route exact path="/about" component={Play} />
            </>
          : <AccountForm ac={props.ac} />
        }
      </Backgrounds.Wrapper>
    </Backgrounds.Main>
  )
}

export default Main;