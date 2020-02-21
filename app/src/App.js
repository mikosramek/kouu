import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/style.scss';

const dummyUser = {
  username: 'Miko',
  points: 1200
}

function App() {
  return (
    <>
      <Header user={dummyUser} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
