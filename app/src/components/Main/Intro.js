import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/kouu-logo.png';

const Intro = () => {
  return(
    <div className="intro-div">
      <h2>Welcome to</h2>
      <div className="intro-logo"><img src={Logo} alt="The Kouu Logo." /></div>
      <p>KOUU is a flashcard app to help you study korean vocabulary. Please login or sign up to start using KOUU.</p>
      <Link to="/login" className='account-form-link'>Login</Link> or <Link to="/signup" className='account-form-link'>Signup</Link>
    </div>
  )
}

export default Intro;