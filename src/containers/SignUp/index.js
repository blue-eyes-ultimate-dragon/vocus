import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { registerUser } from 'reducers/user';

import Navigation from 'src/components/Navigation';
import SignUp from 'src/components/SignUp';

class SjgnUpPage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Login to Vocus" />
        <Navigation {...this.props} />
        <SignUp {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SjgnUpPage);
