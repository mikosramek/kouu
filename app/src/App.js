import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import AccountFunctions from '../src/utility/AccountFunctions';
import reducer from './connect/reducer';

import './styles/style.scss';

const store = createStore(reducer, composeWithDevTools());

function App() {

  React.useEffect(() => {
    AccountFunctions.checkLocalForLogin().then((result) => {
      console.log(result.data);
    });
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
