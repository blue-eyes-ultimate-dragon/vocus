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
import { Progress } from 'reactstrap';

import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import s from '../Project/Login.scss';
import LoginForm from '../Project/WizardFormFirstPage';

const cookies = SERVER ? new Cookies({}) : new Cookies();

class Login extends React.Component {


  render() {

      <Container>
        <Helmet title="New Project | Vocus" />
        <Row>
          <Col className={s.intro} md={{ size: 6, offset: 4 }}>
            <div>
              <h2 className={s.logo}> vocus </h2>
              <p className="lead"> Be the local superhero...123 </p>
              <hr className="my-2" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
