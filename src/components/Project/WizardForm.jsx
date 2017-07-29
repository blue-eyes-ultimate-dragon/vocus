import React, { Component, PropTypes } from 'react'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'
import { Container, Col, Row } from 'reactstrap';

import axios from 'axios';
import Cookies from 'universal-cookie';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Progress } from 'reactstrap';

import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import s from '../Project/Login.scss';

const cookies = SERVER ? new Cookies({}) : new Cookies();

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (<div>
        <Container>
          <Helmet title="New Project | Vocus" />
          <Row>
            <Col className={s.intro} md={{ size: 6, offset: 4 }}>
              <div>
                <h2 className={s.logo}> vocus </h2>
                <p className="lead"> Be the local superhero... </p>
                <hr className="my-2" />
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
                {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm
