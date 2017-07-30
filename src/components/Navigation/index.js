import React from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import cx from 'classnames';
import me from 'src/queries/me.gql';
import s from './styles.scss';

const loggedInbar = user =>
  (<Nav navbar>
    <NavItem>
      <Link to="/discover">Projects</Link>
    </NavItem>
    <NavItem>
      <Link to="/art">Issues</Link>
    </NavItem>
    <NavItem>
      <Link to="/stories">Votes</Link>
    </NavItem>
  </Nav>);

const loggedOutBar = () =>
  (<Nav navbar>
    <NavItem>
      <Link to="/discover">Projects</Link>
    </NavItem>
  </Nav>);

@graphql(me)
class Navigation extends React.PureComponent {
  render() {
    const { data, routeQueryData } = this.props;
    console.log('rendering');
    return (
      <Navbar className={cx(s.menu)} toggleable>
        <Container>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand
            tag={() =>
              (<Link className={s.logo} to="/">
                vocus
              </Link>)} />
          {data && data.me ? loggedInbar(data.me) : loggedOutBar()}
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
