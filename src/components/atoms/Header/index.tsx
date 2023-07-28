import { FC } from "react";
// import { useMovieState } from "../../../context/MovieCtx";
import { useSelector } from "react-redux";
import "./style.scss";

interface HeaderPropTypes {
  title?: string;
}

const Header: FC<HeaderPropTypes> = ({ title = "Movie Catalogue" }) => {
  // const { selectedMovie } = useMovieState();
  const selectedMovie = useSelector((state: any) => state.selectedMovie);

  return (
    <div className="header-wrapper">
      <h1 data-testid="header-title">{selectedMovie.title}</h1>
    </div>
  );
};

export default Header;
