import ListItem from "../../atoms/ListItem";
import { MOVIE_LIST } from "./constant";
// import { useMovieAPI, useMovieState } from "../../../context/MovieCtx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./style.scss";

const MovieList = () => {
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state: any) => state.selectedMovie);

  return (
    <div className="movie-list-wrapper">
      <ul data-testid="movie-list">
        {MOVIE_LIST.map((movie, index) => (
          <ListItem
            key={index}
            itemID={movie.id}
            label={movie.title}
            onClick={() => {
              // setSelectedMovie(movie);
              dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
            }}
            isActive={selectedMovie.id === movie.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
