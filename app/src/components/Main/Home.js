import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  const {name} = props.user;
  return(
    <>
      <h2>Home</h2>
      <p>Welcome back {name}!</p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Home);