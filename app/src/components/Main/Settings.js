import React from 'react';
import { connect } from 'react-redux';

const Settings = () => {
  return(
    <h2>Settings</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Settings);