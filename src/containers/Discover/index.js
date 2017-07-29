import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Navigation from 'src/components/Navigation';
import ProjectList from 'src/components/ProjectList';

import { connect } from 'react-redux';

class Discover extends Component {
  render() {
    return (
      <div>
        <Helmet title="Discover area" />
        <Navigation {...this.props} />
        <ProjectList {...this.props} />
      </div>
    );
  }
}


export default connect()(Discover);
