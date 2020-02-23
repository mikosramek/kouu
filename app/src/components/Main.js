import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.scss';

import Backgrounds from '../style-components/style-backgrounds';

import Intro from './Main/Intro';
import AccountForm from './AccountForm';
import Home from './Main/Home';
import Play from './Main/Play';
import Progress from './Main/Progress';
import Notes from './Main/Notes';
import Settings from './Main/Settings';
import About from './Main/About';
import FourOhFour from './Main/404';

const Main = (props) => {

  const pages = [ 
    { page: <Home isLoggedIn={props.isLoggedIn} />,
      path: '/'
    }, 
    { page: <Play isLoggedIn={props.isLoggedIn} />,
      path: '/play'
    }, 
    { page: <Progress isLoggedIn={props.isLoggedIn} />,
      path: '/progress'
    }, 
    { page: <Notes isLoggedIn={props.isLoggedIn} />,
      path: '/notes'
    }, 
    { page: <Settings isLoggedIn={props.isLoggedIn} />,
      path: '/settings'
    }, 
    { page: <About isLoggedIn={props.isLoggedIn} />,
      path: '/about'
    }
  ];

  return (
    <Backgrounds.Main id="maincontent">
      <Backgrounds.Wrapper>
        {
          props.isLoggedIn 
          ? <>
              <Switch>
                {
                  pages.map((route) => {
                    return <Route key={route.path} exact path = {`${route.path}`} render = {() => route.page} />
                  })
                }
                <Route component={FourOhFour} />
              </Switch>
            </>
          : <>
              <Intro />
              <AccountForm logIn={props.logIn} accountAction={props.accountAction} class="main-login" />
            </>
        }
      </Backgrounds.Wrapper>
    </Backgrounds.Main>
  )
}

export default Main;