import React from 'react';
import { Container, Row, Col, Button,  Nav, NavItem, NavLink } from 'reactstrap';
import s from './styles.scss';
import moment from 'moment';

const Art = props => (
  <Container>
    <Row>
      <Col md={3}>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  </Container>
  );

export default Art;
