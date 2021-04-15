import { FAVORITES } from "../actions/favorites";

const initialState = {};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES.ADD:
      return {
        ...state,
        [action.payload.term]: action.payload
      };
    case FAVORITES.REMOVE:
      const newState = { ...state };
      delete newState[action.payload.term];
      return newState;
    case FAVORITES.START_OVER:
      return initialState;
    default:
      return state;
  }
};

export default favoritesReducer;