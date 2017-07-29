/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import s from './Login.scss';
import LoginForm from './Form';

const cookies = SERVER ? new Cookies({}) : new Cookies();

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      submitState: false,
      error: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(val) {
    this.setState({ error: null, submitState: true });
    try {
      const token = await axios.post('http://localhost:5000/authenticate', val);
      cookies.set('user', token.data);
      this.props.registerUser(jwtDecode(token.data));
      if (!SERVER) {
        localStorage.setItem('Vocus', token.data);
      }
      setTimeout(() => {
        this.props.history.goBack();
      }, 500);
    } catch (e) {
      setTimeout(() => {
        this.setState({ error: e.response, submitState: false });
      }, 500);
    }
  }

  render() {
    return (
      <Container>
        <Helmet title="Login | Vocus" />
        <Row>
          <Col className={s.intro} md={{ size: 4, offset: 4 }}>
            <div>
              <h2 className={s.logo}> vocus </h2>
              <p> Welcome Back :)</p>
            </div>
            <LoginForm errors={this.state.error} submitState={this.state.submitState} onSubmit={this.handleSubmit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
