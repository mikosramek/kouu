import React from 'react';

import Logo from '../../assets/kouu-logo.png';

const Intro = () => {
  return(
    <div className="intro-div">
      <h2>Welcome to</h2>
      <div className="intro-logo"><img src={Logo} alt="The Kouu Logo." /></div>
      <p>KOUU is a flashcard app to help you study korean vocabulary. Please login or sign up to start using KOUU.</p>
    </div>
  )
}

export default Intro;