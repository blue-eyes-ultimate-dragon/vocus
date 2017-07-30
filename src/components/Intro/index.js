import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import s from './styles.scss';
import GoogleSuggest from './GoogleSuggest';
import cx from 'classnames';

class Intro extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      coordinates: {
        lat: 0,
        lng: 0,
      },
    };
  }

  render() {
    return (
      <Container fluid className={s.background}>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className={cx('mb-3', s.heading)}>Your City, Your Voice.</h1>
            <GoogleSuggest {...this.props} />
          </Col>
          <Col className="mt-3" md={{ size: 4, offset: 2 }}>
            <p className={s.subheading}>
              Vocus empowers communication between communities and thier councils.
              <br />
              <br />
              Pitch projects, create issues, and collaborate with your community.
            </p>

            <div className="cta">
              <Link to="/signup">
                <Button className={s.getStartedButton}>Get Started</Button>
              </Link>
              &nbsp;
              <Link to="/signup">
                <Button className={s.learnMoreButton}>Explore</Button>
              </Link>
            </div>
          </Col>
          <Col md="5">
            <img
              alt=""
              src="http://designingflicks.com/images/sydney-opera-house-clipart-3.png"
              className={s.img} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Intro;
