import React from 'react';
import { connect } from 'react-redux';

import { login } from '../../connect/actions'
import AccountFunctions from '../../utility/AccountFunctions';

const Startup = props => {

  const [loading, setLoading] = React.useState(true);

  const { dispatch } = props;

  React.useEffect(() => {
    AccountFunctions.checkLocalForLogin().then((data) => {
      dispatch(login(data));
      setLoading(false);
    }).catch(e => {
      setLoading(false);
    });
  }, [dispatch]);

  return(
    loading
      ? null
      : props.children
  )
}

export default connect()(Startup);