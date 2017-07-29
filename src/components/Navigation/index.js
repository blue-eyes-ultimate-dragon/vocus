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
      <Link to="/Projects">Projects</Link>
    </NavItem>
    <NavItem>
      <Link to="/art">Issues</Link>
    </NavItem>
    <NavItem>
      <Link to="/Projects">Votes</Link>
    </NavItem>
    <NavItem divider />
    <NavItem>
      <Link to="/Projects">
        <i className="fa fa-users" />
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/Projects">
        <i className="fa fa-lg fa-inbox" />
      </Link>
    </NavItem>
    <NavItem>
      <Link to="/Projects">
        <i className="fa fa-lg fa-bell" />
      </Link>
    </NavItem>
    <NavItem className="mr-auto">
      <Link to="/Project/create">
        <Button size="sm" color="primary">
          Compose
        </Button>{' '}
      </Link>
    </NavItem>
  </Nav>);

const loggedOutBar = () =>
  (<Nav navbar>
    <NavItem>
      <Link to="/Projects">Projects</Link>
    </NavItem>
    <NavItem>
      <Link to="/art">Issues</Link>
    </NavItem>
    <NavItem>
      <Link to="/Projects">Votes</Link>
    </NavItem>
    <NavItem divider />
    <NavItem className="mr-auto">
      <Link to="/login">
        <Button size="sm" outline color="primary">
          Login
        </Button>{' '}
      </Link>
    </NavItem>
  </Nav>);

@graphql(me)
class Navigation extends React.PureComponent {
  render() {
    const { data, routeQueryData } = this.props;
    let user = (routeQueryData && routeQueryData.user) || {};
    user = Object.assign({}, user, {
      logo: (
        <img
          className={s.responsive}
          src="http://content.prnewswire.com/images/theScore_logo_yellow_blue_2016.jpg" />
      ),
    });
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
