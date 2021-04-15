import { SEARCH } from "../actions/search";

const initialState = {
  query: '',
  weirdness: 0,
  liked: {},
  result: {},
  loading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.UPDATE:
      return {
        ...state,
        ...action.payload,
        liked: false,
        loading: true,
      }
    case SEARCH.WEIRDNESS:
      return {
        ...state,
        weirdness: action.payload
      }
    case SEARCH.SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload.images ? action.payload : state.result
      }
    case SEARCH.LIKED:
      return {
        ...state,
        liked: action.payload
      }
    case SEARCH.START_OVER:
      return initialState
    default:
      return state;
  }
};

export default searchReducer;
