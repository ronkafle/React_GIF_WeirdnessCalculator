import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
});

export default rootReducer;