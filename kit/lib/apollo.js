// ----------------------
// IMPORTS

// Apollo client library
import Cookies from 'universal-cookie';
import { createNetworkInterface, ApolloClient } from 'react-apollo';

// Custom configuration/settings
import { APOLLO } from 'config/project';

// ----------------------

// Create a new Apollo network interface, to point to our API server.
// Note:  By default in this kit, we'll connect to a sample endpoint that
// repsonds with simple messages.  Update [root]/config.js as needed.

function customInterface(opt) {
  const networkInterface = createNetworkInterface({
    uri: APOLLO.uri,
    opts: {
      ssrMode: opt.ssrMode,
      cookies: opt.cookies,
    },
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }
      if (!req.options.cookies) {
        req.options.cookies = {};  // Create the header object if needed.
      }
    // get the authentication token from local storage if it exists'
      const cookies = SERVER ? new Cookies(req.options.cookies) : new Cookies();
      let token = cookies.get('user');
      if (!SERVER) {
        token = localStorage.getItem('Vocus');
      }
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    },
  }]);

  return networkInterface;
}

// Helper function to create a new Apollo client, by merging in
// passed options alongside the defaults
function createClient(opt = {
  credentials: 'include',
  mode: 'no-cors',
}) {
  return new ApolloClient(Object.assign({
    reduxRootSelector: state => state.apollo,
    networkInterface: customInterface(opt),
  }, opt));
}

// Creates a new browser client
export function browserClient() {
  return createClient();
}

// Creates a new server-side client
export function serverClient(ctx) {
  return createClient({
    ssrMode: true,
    cookies: ctx,
  });
}
