import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Navigation from 'src/components/Navigation';
import ProjectDeail from 'src/components/ProjectDetail';

import { connect } from 'react-redux';

class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <Helmet title="Project deail" />
        <Navigation {...this.props} />
        <ProjectDeail></ProjectDeail>
      </div>
    );
  }
}


export default connect()(ProjectDetail);
