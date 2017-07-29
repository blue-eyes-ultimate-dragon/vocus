// ----------------------
// IMPORTS

/* NPM */

// React
import React from 'react';
// GraphQL
import { graphql } from 'react-apollo';

// Listen to Redux store state
import { connect } from 'react-redux';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';
/* Local */

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';
import Home from 'src/containers/Home';
import Login from 'src/containers/Login';
import Profile from 'src/containers/Profile';
import Project from 'src/containers/Project';


// GraphQL queries

// Styles
import './styles.global.css';

// ----------------------
// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);


// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="ReactQL application"
          meta={[{
            name: 'description',
            content: 'ReactQL starter kit app',
          }]} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Project/create" component={Project} />

          {/* Stories */}

          {/* <Route path="/page/:name" component={Page} />*/}
          <Redirect from="/old/path" to="/new/path" />
          <Route component={WhenNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});


export default App;
