import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { registerUser } from 'reducers/user';

import Navigation from 'src/components/Navigation';
import WizardForm from 'src/components/Project/WizardForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Helmet title=" Vocus" />
        <Navigation {...this.props} />
        <WizardForm {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm);
