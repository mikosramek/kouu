import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

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

  const loggedInPages = [ 
    { page: <Home />,
      path: '/'
    }, 
    { page: <Play />,
      path: '/play'
    }, 
    { page: <Progress />,
      path: '/progress'
    }, 
    { page: <Notes />,
      path: '/notes'
    }, 
    { page: <Settings />,
      path: '/settings'
    }, 
    { page: <About />,
      path: '/about'
    }
  ];

  const landingPages = [
    { page: <Intro />,
      path: '/'
    }, 
    { page: <AccountForm />,
      path: '/login'
    },
  ]

  return (
    <Backgrounds.Main id="maincontent">
      <Backgrounds.Wrapper>
        {
          props.isLoggedIn 
          ? <Switch>
              {
                loggedInPages.map((route) => {
                  return <Route key={route.path} exact path = {`${route.path}`} render = {() => route.page} />
                })
              }
              <Route component={FourOhFour} />
            </Switch>
          : <Switch>
              <Intro />
              <AccountForm class="main-login" />
            </Switch>
        }
      </Backgrounds.Wrapper>
    </Backgrounds.Main>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps)(Main);