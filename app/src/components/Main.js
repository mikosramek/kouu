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

  const pages = [ 
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
              <AccountForm class="main-login" />
            </>
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