import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Intro from 'src/components/Intro';
import Navigation from 'src/components/Navigation';
import { connect } from 'react-redux';
import ProjectProfile from 'src/components/ProjectProfile';
import { Link } from 'react-router-dom';

@connect(({ user }) => ({ user }))

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <Helmet title="Stories | Vocus" />
        <Navigation {...this.props} />
        <ProjectProfile />
      </div>
    );
  }
}

export default ProfileContainer;
