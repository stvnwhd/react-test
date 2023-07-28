import { FC } from "react";
import "./style.scss";

interface MovieDetailPropTypes {
  title: string;
  director: string;
  casts: string;
  genre: string;
}

const MovieDetail: FC<MovieDetailPropTypes> = ({
  title,
  director,
  casts,
  genre
}) => {
  return (
    <div className="movie-detail-wrapper">
      <h3 className="title-text" data-testid="movie-title">
        {title}
      </h3>
      <span className="desc-text" data-testid="movie-director">
        <strong>Director:</strong> {director}
      </span>
      <span className="desc-text" data-testid="movie-cast">
        <strong>Casts:</strong> {casts}
      </span>
      <span className="desc-text" data-testid="movie-genre">
        <strong>Genre:</strong> {genre}
      </span>
    </div>
  );
};

export default MovieDetail;
