import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";
import { MOVIE_LIST } from "./components/molecules/MovieList/constant";

function configureStore(
  state = { rotating: true, selectedMovie: MOVIE_LIST[0] }
) {
  return createStore(rotateReducer, state);
}

export default configureStore;
