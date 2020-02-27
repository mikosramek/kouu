import React from 'react';
import { connect } from 'react-redux';

const Progress = () => {
  return(
    <h2>Progress</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Progress);