import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import Navigation from 'src/components/Navigation';
import Detail from 'src/components/Detail';

import { connect } from 'react-redux';

class ProjectDetail extends Component {
  render() {
    return (
      <div>
        <Helmet title="Project deail" />
        <Navigation {...this.props} />
        <Detail {...this.props}></Detail>
      </div>
    );
  }
}


export default connect()(ProjectDetail);
