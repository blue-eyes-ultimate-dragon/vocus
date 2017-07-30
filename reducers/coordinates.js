const SAVE_COORDS = 'SAVE_COORDS';

const initialState = { lat: 0, lng: 0 };

export function saveCoordinates(coords) {
  return {
    type: SAVE_COORDS,
    coords,
  };
}

export default {
  // The shape that our Redux handler in `kit/lib/redux` expects is
  // { stateKey: { state, reducer() } } -- the `stateKey` is where in the `state`
  // object starts looking, `state` is the initial state, and `reducer()` is the
  // function that handles the 'listening' to Redux to know how to manipulate state
  coordinates: {
    state: initialState,
    reducer(state = initialState, action) {
      if (action.type === 'SAVE_COORDS') {
        return Object.assign({}, state, action.coords);
      }
      return state;
    },
  },
};
