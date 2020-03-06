import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Startup from './components/Account/Startup'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import reducer from './connect/reducer';

import './styles/style.scss';

const store = createStore(reducer, composeWithDevTools());

function App() {

  React.useEffect(() => {
    
  }, []);

  return (
    <Provider store={store}>
      <Startup>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </Startup>
    </Provider>
  );
}

export default App;
