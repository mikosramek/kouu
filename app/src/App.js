import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/style.scss';

function App() {
  const [user, setUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isAttemptingAccountAction, setAccountAction] = React.useState(false);

  const logOut = () => {
    setUser({});
    setLoggedIn(false);
  }

  const logIn = (user) => {
    setUser(user);
    setLoggedIn(true);
    setAccountAction(false);
  }
  
  return (
    <Router>
      <Header user={user} isLoggedIn={isLoggedIn} logOut={logOut} logIn={logIn} accountAction={[isAttemptingAccountAction, setAccountAction]} />
      <Main user={user} isLoggedIn={isLoggedIn} logIn={logIn} accountAction={[isAttemptingAccountAction, setAccountAction]} />
      <Footer />
    </Router>
  );
}

export default App;
