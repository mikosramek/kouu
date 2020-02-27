import React from 'react';
import { connect } from 'react-redux';

const Notes = () => {
  return(
    <h2>Notes</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Notes);