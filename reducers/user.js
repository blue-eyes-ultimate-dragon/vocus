// Sample reducer, showing how you can 'listen' to the `INCREMENT_COUNTER`
// action, and update the counter state

// ----------------------
// IMPORTS

/* NPM */
// import Immutable from 'seamless-immutable';

// ----------------------

// Set the initial `counter.count` to 0.
//
// Technically, we don't need to use `Immutable()` at all in this very simple
// example -- it could just be a plain integer, if we want.  But wrapping it in
// a call to `Immutable()` makes it impossible for us to accidentally change
// this outside of Redux, which is a good pattern to enforce
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';

const cookies = SERVER ? new Cookies({}) : new Cookies();

function getUser() {
  let token;
  if (!SERVER) {
    token = localStorage.getItem('Vocus');
  } else {
    token = cookies.get('user');
  }
  try {
    return jwtDecode(token);
  } catch (e) {
    return { id: null };
  }
}
const initialState = getUser();


const REGISTER_USER = 'REGISTER_USER';

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}

export default {

  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  user: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'REGISTER_USER') {
        return Object.assign({}, state, action.user);
      }
      return state;
    },
  },
};
