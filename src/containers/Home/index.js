import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Intro from 'src/components/Intro';
import Navigation from 'src/components/Navigation';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Vocus" />
        <Navigation {...this.props} />
        <Intro />
      </div>
    );
  }
}


export default connect()(Home);
