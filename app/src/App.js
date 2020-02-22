import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/style.scss';

function App() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const queryApi = (path, params) => {
    return axios({
      method: 'GET',
      url: `http://localhost:3001/${path}`,
      dataResponse: 'json',
      params: params
    });
  }

  const AccountFunctions = {};

  AccountFunctions.logOut = () => {
    setUser({});
    setLoggedIn(false);
  }
  AccountFunctions.logIn = (email, password) => {
    queryApi('login').then( (result) => {
      console.log(result);
      setUser(result.data);
      setLoggedIn(true);
    }).catch( (error) => {
      console.log(error);
    });
  }

  AccountFunctions.updateSettings = settings => {
    console.log('Updating settings', settings);
  }

  AccountFunctions.updateWord = wordID => {
    console.log('POST? userid, and wordid');
    console.log('backend handles if it needs to be updated or not??');
  }

  return (
    <Router>
      <Header user={user} isLoggedIn={isLoggedIn} ac={AccountFunctions} />
      <Main user={user} isLoggedIn={isLoggedIn} ac={AccountFunctions} />
      <Footer />
    </Router>
  );
}

export default App;
