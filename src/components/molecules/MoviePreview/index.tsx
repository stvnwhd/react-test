import Poster from "../../atoms/Poster";
import MovieDetail from "../../atoms/MovieDetail";
// import { useMovieState } from "../../../context/MovieCtx";
import { useSelector } from "react-redux";
import "./style.scss";

const MoviePreview = () => {
  // const { selectedMovie } = useMovieState();
  const selectedMovie = useSelector((state: any) => state.selectedMovie);

  return (
    <div className="movie-preview-wrapper">
      <div style={{ margin: "0px auto", width: "fit-content" }}>
        <Poster imageSrc={selectedMovie.poster} />
      </div>
      <MovieDetail
        title={selectedMovie.title}
        director={selectedMovie.director}
        casts={selectedMovie.casts}
        genre={selectedMovie.genre}
      />
    </div>
  );
};

export default MoviePreview;
