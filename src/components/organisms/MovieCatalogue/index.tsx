import MoviePreview from "../../molecules/MoviePreview";
import MovieList from "../../molecules/MovieList";
import "./style.scss";

const MovieCatalogue = () => {
  return (
    <div className="movie-calague-wrapper">
      <div className="section-wrapper">
        <MoviePreview />
      </div>
      <div className="section-wrapper">
        <MovieList />
      </div>
    </div>
  );
};

export default MovieCatalogue;
