import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { registerUser } from 'reducers/user';

import Navigation from 'src/components/Navigation';
import Project from 'src/components/Project - Broken/index';

class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Create a new Project" />
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
