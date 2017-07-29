import React from 'react';
import { Row, Col, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import s from './styles.scss';

export default props =>
  (<Container fluid className={s.background}>
    <Row>
      <Col md={{ size: 4, offset: 2 }}>
        <h1 className={s.heading}>Your City, Your Voice.</h1>
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
  </Container>);
