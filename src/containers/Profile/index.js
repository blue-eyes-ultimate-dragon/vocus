import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Intro from 'src/components/Intro';
import Navigation from 'src/components/Navigation';
import { connect } from 'react-redux';
import Profile from 'src/components/Profile';
import { Link } from 'react-router-dom';

@connect(({ user }) => ({ user }))

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <Helmet title="Stories | Vocus" />
        <Navigation {...this.props} />
        <Profile />
      </div>
    );
  }
}

export default ProfileContainer;
