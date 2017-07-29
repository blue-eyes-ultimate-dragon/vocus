import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { registerUser } from 'reducers/user';

import Navigation from 'src/components/Navigation';
import Login from 'src/components/Project';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Login to Vocus" />
        <Navigation {...this.props} />
        <Login {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => {
    dispatch(registerUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
