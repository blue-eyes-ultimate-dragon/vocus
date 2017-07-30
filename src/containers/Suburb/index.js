import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Intro from 'src/components/Intro';
import Navigation from 'src/components/Navigation';
import { connect } from 'react-redux';
import Suburb from 'src/components/Suburb';
import { Link } from 'react-router-dom';

@connect(({ user }) => ({ user }))
class SuburbContainer extends Component {
  render() {
    console.log(Navigation);
    return (
      <div>
        <Helmet title="Stories | Vocus" />
        <Navigation {...this.props} />
        <Suburb {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coordinates: state.coordinates,
});

export default connect(mapStateToProps)(SuburbContainer);
