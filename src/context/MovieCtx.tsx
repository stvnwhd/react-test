import { createContext, FC, ReactNode, useContext, useState } from "react";
import { MOVIE_LIST } from "../components/molecules/MovieList/constant";

interface MovieProviderPropTypes {
  children: ReactNode;
}

const MovieStateCtx: any = createContext(null);
const MovieApiCtx: any = createContext(null);

export const MovieProvider: FC<MovieProviderPropTypes> = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(MOVIE_LIST[0]);

  const movieState = {
    selectedMovie
  };

  const movieAPI = {
    setSelectedMovie
  };

  return (
    <MovieStateCtx.Provider value={movieState}>
      <MovieApiCtx.Provider value={movieAPI}>{children}</MovieApiCtx.Provider>
    </MovieStateCtx.Provider>
  );
};

export const useMovieState: any = () => {
  const stateContext = useContext(MovieStateCtx);

  if (!stateContext) {
    throw new Error("useMovieState must be used within the MovieProvider");
  }

  return stateContext;
};

export const useMovieAPI: any = () => {
  const apiContext = useContext(MovieApiCtx);

  if (!apiContext) {
    throw new Error("useMovieAPI must be used within the MovieProvider");
  }

  return apiContext;
};
